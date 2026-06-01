import { Controller, Get } from '@nestjs/common';
import { PromptsService } from '../services/prompts.service';

@Controller('api/prompts')
export class PromptsController {
  constructor(private readonly promptsService: PromptsService) {}

  @Get()
  list() {
    return this.promptsService.listPromptFiles();
  }
}
