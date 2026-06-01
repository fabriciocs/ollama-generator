import { Injectable } from '@nestjs/common';
import { AppLoggerService } from '../logging/app-logger.service';
import { GenerationLogsService } from '../generation-logs/services/generation-logs.service';

@Injectable()
export class DebugService {
  constructor(
    private readonly logger: AppLoggerService,
    private readonly generationLogsService: GenerationLogsService,
  ) {}

  async getRecentLogs() {
    return {
      backend: this.logger.getRecentEntries(),
      generations: await this.generationLogsService.listRecent(50),
    };
  }
}
