import { Injectable } from '@nestjs/common';
import { GenerationLogWriterService } from '../../generation-logs/services/generation-log-writer.service';
import { GeneratedFileWriterService } from '../../generated-files/services/generated-file-writer.service';
import { GenerationStatusService } from './generation-status.service';
import { GenerationStepOrchestratorService } from './generation-step-orchestrator.service';
import { GenerationRepository } from '../repositories/generation.repository';
import { GenerationStepRepository } from '../repositories/generation-step.repository';

@Injectable()
export class GenerationRunnerService {
  constructor(
    private readonly generationRepository: GenerationRepository,
    private readonly generationStepRepository: GenerationStepRepository,
    private readonly generationStatusService: GenerationStatusService,
    private readonly generationStepOrchestratorService: GenerationStepOrchestratorService,
    private readonly generationLogWriterService: GenerationLogWriterService,
    private readonly generatedFileWriterService: GeneratedFileWriterService,
  ) {}

  async run(generationId: string): Promise<void> {
    const generation = await this.generationRepository.findOne(generationId);
    if (!generation) {
      return;
    }

    const artifacts: Record<string, string> = {};
    const steps =
      await this.generationStepRepository.findByGenerationId(generationId);
    generation.status = 'running';
    await this.generationRepository.save(generation);
    await this.generationStatusService.writeSnapshot(generationId);

    for (const step of steps) {
      const startedAt = Date.now();
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
        await this.generationLogWriterService.write({
          generationId: generation.id,
          stepId: step.id,
          level: 'error',
          message: 'Step failed',
          metadata: { error: step.errorMessage, stepKey: step.stepKey },
        });
        await this.generationStepRepository.save(step);
        await this.generationRepository.save(generation);
        await this.generationStatusService.writeSnapshot(generationId);
        return;
      }

      await this.generationStepRepository.save(step);
      await this.generationRepository.save(generation);
      await this.generationStatusService.writeSnapshot(generationId);
    }

    generation.status = 'completed';
    generation.finishedAt = new Date();
    await this.generationRepository.save(generation);
    await this.generationStatusService.writeSnapshot(generationId);
  }
}
