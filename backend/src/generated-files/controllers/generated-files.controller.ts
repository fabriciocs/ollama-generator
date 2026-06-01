import { Controller, Get, Param } from '@nestjs/common';
import { GeneratedFilesService } from '../services/generated-files.service';

@Controller('api/generated-files')
export class GeneratedFilesController {
  constructor(private readonly generatedFilesService: GeneratedFilesService) {}

  @Get(':generationId')
  list(@Param('generationId') generationId: string) {
    return this.generatedFilesService.listByGenerationId(generationId);
  }
}
