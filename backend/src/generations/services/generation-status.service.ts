import { Injectable, NotFoundException } from '@nestjs/common';
import { FilesystemService } from '../../filesystem/services/filesystem.service';
import { GenerationStepExecutionEntity } from '../entities/generation-step-execution.entity';
import { GenerationRepository } from '../repositories/generation.repository';
import { GenerationStepExecutionRepository } from '../repositories/generation-step-execution.repository';
import { GenerationStepRepository } from '../repositories/generation-step.repository';

@Injectable()
export class GenerationStatusService {
  constructor(
    private readonly generationRepository: GenerationRepository,
    private readonly generationStepRepository: GenerationStepRepository,
    private readonly generationStepExecutionRepository: GenerationStepExecutionRepository,
    private readonly filesystemService: FilesystemService,
  ) {}

  async getStatus(generationId: string) {
    const generation = await this.generationRepository.findOne(generationId);
    if (!generation) {
      throw new NotFoundException('Generation not found');
    }
    const steps =
      await this.generationStepRepository.findByGenerationId(generationId);
    const executions =
      await this.generationStepExecutionRepository.findByGenerationId(
        generationId,
      );
    const executionsByStepId = new Map<
      string,
      GenerationStepExecutionEntity[]
    >();
    for (const execution of executions) {
      const current = executionsByStepId.get(execution.stepId) ?? [];
      current.push(execution);
      executionsByStepId.set(execution.stepId, current);
    }
    for (const step of steps) {
      step.executions = executionsByStepId.get(step.id) ?? [];
    }
    return { ...generation, steps };
  }

  async writeSnapshot(generationId: string): Promise<void> {
    const status = await this.getStatus(generationId);
    await this.filesystemService.writeFile(
      status.outputDir,
      '_generation-status.json',
      JSON.stringify(status, null, 2),
    );
  }
}
