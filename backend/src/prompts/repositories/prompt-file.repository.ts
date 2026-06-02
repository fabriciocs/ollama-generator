import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PromptFileEntity } from '../entities/prompt-file.entity';

@Injectable()
export class PromptFileRepository {
  constructor(
    @InjectRepository(PromptFileEntity)
    private readonly repository: Repository<PromptFileEntity>,
  ) {}

  async upsert(entity: PromptFileEntity): Promise<PromptFileEntity> {
    const existing = await this.repository.findOne({
      where: { fileName: entity.fileName },
    });

    if (existing) {
      existing.absolutePath = entity.absolutePath;
      existing.relativePath = entity.relativePath;
      existing.sizeBytes = entity.sizeBytes;
      return this.repository.save(existing);
    }

    return this.repository.save(entity);
  }
}
