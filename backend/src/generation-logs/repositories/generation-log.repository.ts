import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenerationLogEntity } from '../entities/generation-log.entity';

@Injectable()
export class GenerationLogRepository {
  constructor(
    @InjectRepository(GenerationLogEntity)
    private readonly repository: Repository<GenerationLogEntity>,
  ) {}

  save(entity: GenerationLogEntity): Promise<GenerationLogEntity> {
    return this.repository.save(entity);
  }

  findRecent(limit = 50): Promise<GenerationLogEntity[]> {
    return this.repository.find({ order: { createdAt: 'DESC' }, take: limit });
  }

  findByGenerationId(generationId: string): Promise<GenerationLogEntity[]> {
    return this.repository.find({
      where: { generationId },
      order: { createdAt: 'ASC' },
    });
  }
}
