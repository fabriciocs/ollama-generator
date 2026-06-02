import { Injectable } from '@nestjs/common';
import * as path from 'node:path';
import { FilesystemService } from '../../filesystem/services/filesystem.service';
import { GeneratedFileEntity } from '../entities/generated-file.entity';
import { GeneratedFileRepository } from '../repositories/generated-file.repository';

@Injectable()
export class GeneratedFileWriterService {
  constructor(
    private readonly filesystemService: FilesystemService,
    private readonly generatedFileRepository: GeneratedFileRepository,
  ) {}

  async writeGeneratedFile(params: {
    generationId: string;
    stepId?: string | null;
    outputDir: string;
    fileName: string;
    content: string;
    mimeType?: string;
  }): Promise<GeneratedFileEntity> {
    const absolutePath = await this.filesystemService.writeFile(
      params.outputDir,
      params.fileName,
      params.content,
    );
    const stat = await this.filesystemService.statFile(absolutePath);
    const existing =
      await this.generatedFileRepository.findOneByGenerationIdAndFileName(
        params.generationId,
        params.fileName,
      );
    const entity = existing ?? new GeneratedFileEntity();
    entity.generationId = params.generationId;
    entity.stepId = params.stepId ?? null;
    entity.fileName = params.fileName;
    entity.relativePath = params.fileName;
    entity.absolutePath = path.resolve(absolutePath);
    entity.sizeBytes = stat.size;
    entity.mimeType = params.mimeType ?? 'text/markdown';
    return this.generatedFileRepository.save(entity);
  }
}
