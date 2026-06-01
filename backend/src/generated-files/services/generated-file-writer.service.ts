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
    const entity = Object.assign(new GeneratedFileEntity(), {
      generationId: params.generationId,
      stepId: params.stepId ?? null,
      fileName: params.fileName,
      relativePath: params.fileName,
      absolutePath: path.resolve(absolutePath),
      sizeBytes: stat.size,
      mimeType: params.mimeType ?? 'text/markdown',
    });
    return this.generatedFileRepository.save(entity);
  }
}
