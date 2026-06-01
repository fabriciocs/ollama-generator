import { Injectable } from '@nestjs/common';
import { AppLogLevel } from '../../common/types/log-level';
import { AppLoggerService } from '../../logging/app-logger.service';
import { GenerationLogEntity } from '../entities/generation-log.entity';
import { GenerationLogRepository } from '../repositories/generation-log.repository';

@Injectable()
export class GenerationLogWriterService {
  constructor(
    private readonly generationLogRepository: GenerationLogRepository,
    private readonly logger: AppLoggerService,
  ) {}

  async write(params: {
    generationId: string;
    stepId?: string | null;
    level: AppLogLevel;
    message: string;
    metadata?: Record<string, unknown>;
  }): Promise<GenerationLogEntity> {
    this.logger[params.level](params.message, {
      generationId: params.generationId,
      stepId: params.stepId ?? null,
      ...params.metadata,
    });

    const entity = Object.assign(new GenerationLogEntity(), {
      generationId: params.generationId,
      stepId: params.stepId ?? null,
      level: params.level,
      message: params.message,
      metadataJson: params.metadata ? JSON.stringify(params.metadata) : null,
    });
    return this.generationLogRepository.save(entity);
  }
}
