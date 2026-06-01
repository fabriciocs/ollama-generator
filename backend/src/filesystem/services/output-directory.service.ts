import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'node:path';
import { slugifyProductName } from '../../common/utils/slugify';
import { FilesystemService } from './filesystem.service';

@Injectable()
export class OutputDirectoryService {
  constructor(
    private readonly configService: ConfigService,
    private readonly filesystemService: FilesystemService,
  ) {}

  async createProductDirectory(idea: string): Promise<{
    productName: string;
    outputBaseDir: string;
    outputDir: string;
  }> {
    const outputBaseDir = path.resolve(
      this.configService.getOrThrow<string>('outputBaseDir'),
    );
    await this.filesystemService.ensureDir(outputBaseDir);
    const productName = slugifyProductName(idea, outputBaseDir);
    const outputDir = path.join(outputBaseDir, productName);
    await this.filesystemService.ensureDir(outputDir);

    return { productName, outputBaseDir, outputDir };
  }
}
