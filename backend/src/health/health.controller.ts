import { Controller, Get } from '@nestjs/common';
import { OllamaChatService } from '../ollama/services/ollama-chat.service';
import { HealthService } from './health.service';

@Controller('api/health')
export class HealthController {
  constructor(
    private readonly healthService: HealthService,
    private readonly ollamaChatService: OllamaChatService,
  ) {}

  @Get()
  index() {
    return this.healthService.getSystemHealth();
  }

  @Get('database')
  database() {
    return this.healthService.getDatabaseHealth();
  }

  @Get('ollama')
  ollama() {
    return this.ollamaChatService.healthCheck();
  }
}
