import { Injectable } from '@nestjs/common';
import { GeneratedFileRepository } from '../repositories/generated-file.repository';

@Injectable()
export class GeneratedFileReaderService {
  constructor(
    private readonly generatedFileRepository: GeneratedFileRepository,
  ) {}

  listByGenerationId(generationId: string) {
    return this.generatedFileRepository.findByGenerationId(generationId);
  }
}
