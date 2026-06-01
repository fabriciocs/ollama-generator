import { Controller, Get, Param, Query } from '@nestjs/common';
import { GenerationLogsService } from '../services/generation-logs.service';

@Controller('api/generation-logs')
export class GenerationLogsController {
  constructor(private readonly generationLogsService: GenerationLogsService) {}

  @Get('recent')
  recent(@Query('limit') limit?: string) {
    return this.generationLogsService.listRecent(limit ? Number(limit) : 50);
  }

  @Get(':generationId')
  listByGeneration(@Param('generationId') generationId: string) {
    return this.generationLogsService.listByGenerationId(generationId);
  }
}
