import { Injectable } from '@nestjs/common';
import { GenerationLogRepository } from '../repositories/generation-log.repository';

@Injectable()
export class GenerationLogsService {
  constructor(
    private readonly generationLogRepository: GenerationLogRepository,
  ) {}

  listRecent(limit?: number) {
    return this.generationLogRepository.findRecent(limit);
  }

  listByGenerationId(generationId: string) {
    return this.generationLogRepository.findByGenerationId(generationId);
  }
}
