import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenerationEntity } from '../entities/generation.entity';

@Injectable()
export class GenerationRepository {
  constructor(
    @InjectRepository(GenerationEntity)
    private readonly repository: Repository<GenerationEntity>,
  ) {}

  save(entity: GenerationEntity): Promise<GenerationEntity> {
    return this.repository.save(entity);
  }

  findAll(): Promise<GenerationEntity[]> {
    return this.repository.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: string): Promise<GenerationEntity | null> {
    return this.repository.findOne({ where: { id } });
  }
}
