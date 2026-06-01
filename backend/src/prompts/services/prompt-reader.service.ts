import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { sha256 } from '../../common/utils/hash';
import { AppLoggerService } from '../../logging/app-logger.service';

@Injectable()
export class PromptReaderService {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: AppLoggerService,
  ) {}

  getPromptsBaseDir(): string {
    return path.resolve(
      this.configService.getOrThrow<string>('promptsBaseDir'),
    );
  }

  async readPrompt(promptFileName: string): Promise<{
    absolutePath: string;
    relativePath: string;
    content: string;
    hash: string;
    sizeBytes: number;
  }> {
    const promptsBaseDir = this.getPromptsBaseDir();
    const normalizedName = promptFileName.endsWith('.md')
      ? promptFileName
      : `${promptFileName}.md`;
    const absolutePath = path.resolve(promptsBaseDir, normalizedName);

    if (
      !absolutePath.startsWith(`${promptsBaseDir}${path.sep}`) &&
      absolutePath !== promptsBaseDir
    ) {
      throw new BadRequestException('Prompt outside prompts base dir');
    }

    let content: string;
    try {
      content = await fs.readFile(absolutePath, 'utf8');
    } catch {
      throw new BadRequestException(`Prompt file not found: ${normalizedName}`);
    }

    this.logger.debug('Prompt loaded', {
      promptFileName: normalizedName,
      absolutePath,
      sizeBytes: Buffer.byteLength(content),
      hash: sha256(content),
    });

    return {
      absolutePath,
      relativePath: normalizedName,
      content,
      hash: sha256(content),
      sizeBytes: Buffer.byteLength(content),
    };
  }
}
