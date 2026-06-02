import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenerationStepExecutionEntity } from '../entities/generation-step-execution.entity';

@Injectable()
export class GenerationStepExecutionRepository {
  constructor(
    @InjectRepository(GenerationStepExecutionEntity)
    private readonly repository: Repository<GenerationStepExecutionEntity>,
  ) {}

  save(
    entity: GenerationStepExecutionEntity,
  ): Promise<GenerationStepExecutionEntity> {
    return this.repository.save(entity);
  }

  findByGenerationId(
    generationId: string,
  ): Promise<GenerationStepExecutionEntity[]> {
    return this.repository.find({
      where: { generationId },
      order: { attemptNumber: 'ASC', createdAt: 'ASC' },
    });
  }

  findByStepId(stepId: string): Promise<GenerationStepExecutionEntity[]> {
    return this.repository.find({
      where: { stepId },
      order: { attemptNumber: 'ASC', createdAt: 'ASC' },
    });
  }

  async findNextAttemptNumber(stepId: string): Promise<number> {
    const lastExecution = await this.repository.findOne({
      where: { stepId },
      order: { attemptNumber: 'DESC' },
    });
    return (lastExecution?.attemptNumber ?? 0) + 1;
  }
}
