import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { PromptFileDto } from '../dto/prompt-file.dto';
import { PromptFileEntity } from '../entities/prompt-file.entity';
import { PromptFileRepository } from '../repositories/prompt-file.repository';
import { PromptReaderService } from './prompt-reader.service';

@Injectable()
export class PromptCatalogService {
  constructor(
    private readonly promptReaderService: PromptReaderService,
    private readonly promptFileRepository: PromptFileRepository,
  ) {}

  async listPromptFiles(): Promise<PromptFileDto[]> {
    const baseDir = this.promptReaderService.getPromptsBaseDir();
    const entries = await fs
      .readdir(baseDir, { withFileTypes: true })
      .catch(() => []);

    const files = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map(async (entry) => {
          const absolutePath = path.join(baseDir, entry.name);
          const stat = await fs.stat(absolutePath);
          const entity = Object.assign(new PromptFileEntity(), {
            fileName: entry.name,
            absolutePath,
            relativePath: entry.name,
            sizeBytes: stat.size,
          });
          await this.promptFileRepository.upsert(entity);
          return {
            fileName: entity.fileName,
            absolutePath: entity.absolutePath,
            relativePath: entity.relativePath,
            sizeBytes: entity.sizeBytes,
          };
        }),
    );

    return files.sort((left, right) =>
      left.fileName.localeCompare(right.fileName),
    );
  }
}
