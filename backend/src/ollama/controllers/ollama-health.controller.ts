import { Controller, Get } from '@nestjs/common';
import { OllamaChatService } from '../services/ollama-chat.service';

@Controller('api/health/ollama')
export class OllamaHealthController {
  constructor(private readonly ollamaChatService: OllamaChatService) {}

  @Get()
  getHealth() {
    return this.ollamaChatService.healthCheck();
  }
}
