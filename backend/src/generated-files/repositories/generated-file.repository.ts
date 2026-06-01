import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneratedFileEntity } from '../entities/generated-file.entity';

@Injectable()
export class GeneratedFileRepository {
  constructor(
    @InjectRepository(GeneratedFileEntity)
    private readonly repository: Repository<GeneratedFileEntity>,
  ) {}

  save(entity: GeneratedFileEntity): Promise<GeneratedFileEntity> {
    return this.repository.save(entity);
  }

  findByGenerationId(generationId: string): Promise<GeneratedFileEntity[]> {
    return this.repository.find({
      where: { generationId },
      order: { createdAt: 'DESC' },
    });
  }
}
