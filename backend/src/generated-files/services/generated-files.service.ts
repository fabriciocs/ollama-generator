import { Injectable } from '@nestjs/common';
import { GeneratedFileReaderService } from './generated-file-reader.service';

@Injectable()
export class GeneratedFilesService {
  constructor(
    private readonly generatedFileReaderService: GeneratedFileReaderService,
  ) {}

  listByGenerationId(generationId: string) {
    return this.generatedFileReaderService.listByGenerationId(generationId);
  }
}
