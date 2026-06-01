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
    return this.repository.save(entity);
  }
}
