import { Injectable } from '@nestjs/common';
import { PromptCatalogService } from './prompt-catalog.service';

@Injectable()
export class PromptsService {
  constructor(private readonly promptCatalogService: PromptCatalogService) {}

  async listPromptFiles() {
    return this.promptCatalogService.listPromptFiles();
  }
}
