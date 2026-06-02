import { Injectable } from '@nestjs/common';
import { sha256 } from '../../common/utils/hash';
import { FilesystemService } from '../../filesystem/services/filesystem.service';
import { GenerationLogWriterService } from '../../generation-logs/services/generation-log-writer.service';
import { GeneratedFileWriterService } from '../../generated-files/services/generated-file-writer.service';
import { GenerationStepExecutionEntity } from '../entities/generation-step-execution.entity';
import { GenerationRepository } from '../repositories/generation.repository';
import { GenerationStepExecutionRepository } from '../repositories/generation-step-execution.repository';
import { GenerationStepRepository } from '../repositories/generation-step.repository';
import { GenerationStatusService } from './generation-status.service';
import { GenerationStepOrchestratorService } from './generation-step-orchestrator.service';
import { GenerationStepEntity } from '../entities/generation-step.entity';

@Injectable()
export class GenerationRunnerService {
  constructor(
    private readonly generationRepository: GenerationRepository,
    private readonly generationStepRepository: GenerationStepRepository,
    private readonly generationStepExecutionRepository: GenerationStepExecutionRepository,
    private readonly generationStatusService: GenerationStatusService,
    private readonly generationStepOrchestratorService: GenerationStepOrchestratorService,
    private readonly generationLogWriterService: GenerationLogWriterService,
    private readonly generatedFileWriterService: GeneratedFileWriterService,
    private readonly filesystemService: FilesystemService,
  ) {}

  async run(
    generationId: string,
    options?: { fromStepKey?: string },
  ): Promise<void> {
    const generation = await this.generationRepository.findOne(generationId);
    if (!generation) {
      return;
    }

    const steps =
      await this.generationStepRepository.findByGenerationId(generationId);
    const startIndex = this.resolveStartIndex(steps, options?.fromStepKey);
    if (startIndex < 0) {
      generation.status = 'completed';
      generation.currentStepKey = null;
      generation.errorMessage = null;
      generation.finishedAt = new Date();
      await this.generationRepository.save(generation);
      await this.generationStatusService.writeSnapshot(generationId);
      return;
    }

    const artifacts = await this.loadCompletedArtifacts(
      generation.outputDir,
      steps,
      startIndex,
    );

    generation.status = 'running';
    generation.currentStepKey = steps[startIndex]?.stepKey ?? null;
    generation.errorMessage = null;
    generation.finishedAt = null;
    await this.generationRepository.save(generation);
    await this.generationStatusService.writeSnapshot(generationId);

    for (let index = startIndex; index < steps.length; index += 1) {
      const step = steps[index];
      const startedAt = Date.now();
      const execution = await this.startExecution({
        generationId: generation.id,
        step,
        steps,
      });

      step.status = 'running';
      step.startedAt = new Date();
      generation.currentStepKey = step.stepKey;
      await this.generationStepRepository.save(step);
      await this.generationRepository.save(generation);
      await this.generationStatusService.writeSnapshot(generationId);

      try {
        const completedSteps = steps.filter(
          (candidate) =>
            candidate.orderIndex < step.orderIndex &&
            candidate.status === 'completed',
        );
        const content =
          await this.generationStepOrchestratorService.executeStep({
            generationId: generation.id,
            productName: generation.productName,
            idea: generation.idea,
            outputDir: generation.outputDir,
            step,
            completedSteps,
            artifacts,
          });
        artifacts[step.stepKey] = content;
        step.status = 'completed';
        step.finishedAt = new Date();
        step.durationMs = Date.now() - startedAt;
        generation.lastGeneratedFile = step.outputFile;
        execution.status = 'completed';
        execution.finishedAt = step.finishedAt;
        execution.durationMs = step.durationMs;
        execution.outputHash = sha256(content);

        await this.generatedFileWriterService.writeGeneratedFile({
          generationId: generation.id,
          outputDir: generation.outputDir,
          fileName: '_contexto-resumido.md',
          content: Object.entries(artifacts)
            .map(([stepKey, artifact]) => `## ${stepKey}\n${artifact}`)
            .join('\n\n'),
        });
        await this.generatedFileWriterService.writeGeneratedFile({
          generationId: generation.id,
          outputDir: generation.outputDir,
          fileName: '_logs.md',
          content: steps
            .map(
              (entry) =>
                `- ${entry.title}: ${entry.status} (${entry.durationMs ?? 0} ms)`,
            )
            .join('\n'),
        });

        await this.generationLogWriterService.write({
          generationId: generation.id,
          stepId: step.id,
          level: 'info',
          message: 'Step completed',
          metadata: {
            stepKey: step.stepKey,
            outputFile: step.outputFile,
            durationMs: step.durationMs,
            executionId: execution.id,
            attemptNumber: execution.attemptNumber,
          },
        });
      } catch (error) {
        step.status = 'error';
        step.finishedAt = new Date();
        step.durationMs = Date.now() - startedAt;
        step.errorMessage =
          error instanceof Error ? error.message : String(error);
        generation.status = 'error';
        generation.errorMessage = step.errorMessage;
        generation.finishedAt = new Date();
        execution.status = 'error';
        execution.finishedAt = step.finishedAt;
        execution.durationMs = step.durationMs;
        execution.errorMessage = step.errorMessage;
        await this.generationLogWriterService.write({
          generationId: generation.id,
          stepId: step.id,
          level: 'error',
          message: 'Step failed',
          metadata: {
            error: step.errorMessage,
            stepKey: step.stepKey,
            executionId: execution.id,
            attemptNumber: execution.attemptNumber,
          },
        });
        await this.generationStepRepository.save(step);
        await this.generationStepExecutionRepository.save(execution);
        await this.generationRepository.save(generation);
        await this.generationStatusService.writeSnapshot(generationId);
        return;
      }

      await this.generationStepRepository.save(step);
      await this.generationStepExecutionRepository.save(execution);
      await this.generationRepository.save(generation);
      await this.generationStatusService.writeSnapshot(generationId);
    }

    generation.status = 'completed';
    generation.currentStepKey = null;
    generation.finishedAt = new Date();
    await this.generationRepository.save(generation);
    await this.generationStatusService.writeSnapshot(generationId);
  }

  private resolveStartIndex(
    steps: GenerationStepEntity[],
    fromStepKey?: string,
  ): number {
    if (fromStepKey) {
      return steps.findIndex((step) => step.stepKey === fromStepKey);
    }

    return steps.findIndex((step) => step.status !== 'completed');
  }

  private async loadCompletedArtifacts(
    outputDir: string,
    steps: GenerationStepEntity[],
    startIndex: number,
  ): Promise<Record<string, string>> {
    const artifacts: Record<string, string> = {};
    for (let index = 0; index < startIndex; index += 1) {
      const step = steps[index];
      if (step.status !== 'completed') {
        continue;
      }

      try {
        artifacts[step.stepKey] = await this.filesystemService.readFile(
          outputDir,
          step.outputFile,
        );
      } catch {
        artifacts[step.stepKey] = '';
      }
    }
    return artifacts;
  }

  private async startExecution(params: {
    generationId: string;
    step: GenerationStepEntity;
    steps: GenerationStepEntity[];
  }): Promise<GenerationStepExecutionEntity> {
    const execution = new GenerationStepExecutionEntity();
    execution.generationId = params.generationId;
    execution.stepId = params.step.id;
    execution.attemptNumber =
      await this.generationStepExecutionRepository.findNextAttemptNumber(
        params.step.id,
      );
    execution.status = 'running';
    execution.promptPath = params.step.promptPath;
    execution.outputFile = params.step.outputFile;
    execution.inputSnapshotJson = JSON.stringify({
      stepKey: params.step.stepKey,
      stepTitle: params.step.title,
      completedStepKeys: params.steps
        .filter((candidate) => candidate.orderIndex < params.step.orderIndex)
        .map((candidate) => candidate.stepKey),
      artifactKeys: params.steps
        .filter((candidate) => candidate.orderIndex < params.step.orderIndex)
        .map((candidate) => candidate.stepKey),
    });
    execution.outputHash = null;
    execution.startedAt = new Date();
    execution.finishedAt = null;
    execution.durationMs = null;
    execution.errorMessage = null;
    return this.generationStepExecutionRepository.save(execution);
  }
}
