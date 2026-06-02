import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { PromptFileDto } from '../dto/prompt-file.dto';
import { PromptFileEntity } from '../entities/prompt-file.entity';
import { PromptFileRepository } from '../repositories/prompt-file.repository';
import { PromptDiscoveryService } from './prompt-discovery.service';
import { PromptReaderService } from './prompt-reader.service';

@Injectable()
export class PromptCatalogService {
  constructor(
    private readonly promptReaderService: PromptReaderService,
    private readonly promptDiscoveryService: PromptDiscoveryService,
    private readonly promptFileRepository: PromptFileRepository,
  ) {}

  async listPromptFiles(): Promise<PromptFileDto[]> {
    const baseDir = this.promptReaderService.getPromptsBaseDir();
    const promptFileNames =
      await this.promptDiscoveryService.listPromptFileNames();

    const files = await Promise.all(
      promptFileNames.map(async (fileName) => {
        const absolutePath = path.join(baseDir, fileName);
        const stat = await fs.stat(absolutePath);
        const entity = new PromptFileEntity();
        entity.fileName = fileName;
        entity.absolutePath = absolutePath;
        entity.relativePath = fileName;
        entity.sizeBytes = stat.size;
        await this.promptFileRepository.upsert(entity);
        const dto: PromptFileDto = {
          fileName: entity.fileName,
          absolutePath: entity.absolutePath,
          relativePath: entity.relativePath,
          sizeBytes: entity.sizeBytes,
        };
        return dto;
      }),
    );

    return files;
  }
}
