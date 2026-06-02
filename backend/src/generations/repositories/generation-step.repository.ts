import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenerationStepEntity } from '../entities/generation-step.entity';

@Injectable()
export class GenerationStepRepository {
  constructor(
    @InjectRepository(GenerationStepEntity)
    private readonly repository: Repository<GenerationStepEntity>,
  ) {}

  save(entity: GenerationStepEntity): Promise<GenerationStepEntity> {
    return this.repository.save(entity);
  }

  saveMany(entities: GenerationStepEntity[]): Promise<GenerationStepEntity[]> {
    return this.repository.save(entities);
  }

  findByGenerationId(generationId: string): Promise<GenerationStepEntity[]> {
    return this.repository.find({
      where: { generationId },
      order: { orderIndex: 'ASC' },
    });
  }

  findOneByGenerationIdAndStepId(
    generationId: string,
    stepId: string,
  ): Promise<GenerationStepEntity | null> {
    return this.repository.findOne({
      where: { generationId, id: stepId },
    });
  }

  findOne(id: string): Promise<GenerationStepEntity | null> {
    return this.repository.findOne({ where: { id } });
  }
}
