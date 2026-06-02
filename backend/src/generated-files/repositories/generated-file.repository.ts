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

  findOneByGenerationIdAndFileName(
    generationId: string,
    fileName: string,
  ): Promise<GeneratedFileEntity | null> {
    return this.repository.findOne({
      where: { generationId, fileName },
    });
  }

  findByGenerationId(generationId: string): Promise<GeneratedFileEntity[]> {
    return this.repository.find({
      where: { generationId },
      order: { createdAt: 'DESC' },
    });
  }
}
