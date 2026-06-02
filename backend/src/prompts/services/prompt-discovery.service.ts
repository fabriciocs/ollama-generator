import { BadRequestException, Injectable } from '@nestjs/common';
import { Dirent } from 'node:fs';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { PromptReaderService } from './prompt-reader.service';

type PromptFileParts = {
  stage: string;
  step: number;
};

@Injectable()
export class PromptDiscoveryService {
  constructor(private readonly promptReaderService: PromptReaderService) {}

  async listPromptFileNames(): Promise<string[]> {
    const baseDir = this.promptReaderService.getPromptsBaseDir();
    let entries: Dirent[];
    try {
      entries = await fs.readdir(baseDir, { withFileTypes: true });
    } catch {
      throw new BadRequestException(`Prompts base dir not found: ${baseDir}`);
    }

    const promptFileNames = entries
      .filter((entry: Dirent) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry: Dirent) => entry.name);

    return promptFileNames.sort((left: string, right: string) =>
      this.comparePromptFileNames(left, right),
    );
  }

  private comparePromptFileNames(left: string, right: string): number {
    const leftParts = this.parsePromptFileName(left);
    const rightParts = this.parsePromptFileName(right);

    if (leftParts && rightParts) {
      const stageComparison = this.compareStageParts(
        leftParts.stage,
        rightParts.stage,
      );
      if (stageComparison !== 0) {
        return stageComparison;
      }

      return leftParts.step - rightParts.step;
    }

    return left.localeCompare(right);
  }

  private compareStageParts(left: string, right: string): number {
    const leftSegments = left.split('.').map(Number);
    const rightSegments = right.split('.').map(Number);
    const length = Math.max(leftSegments.length, rightSegments.length);

    for (let index = 0; index < length; index += 1) {
      const leftValue = leftSegments[index] ?? 0;
      const rightValue = rightSegments[index] ?? 0;
      if (leftValue !== rightValue) {
        return leftValue - rightValue;
      }
    }

    return 0;
  }

  private parsePromptFileName(fileName: string): PromptFileParts | null {
    const match = /^etapa-(\d+(?:\.\d+)*)-(\d+)-prompt\.md$/.exec(fileName);
    if (!match) {
      return null;
    }

    return {
      stage: match[1],
      step: Number(match[2]),
    };
  }

  buildStepKey(promptFileName: string): string {
    return promptFileName.replace(/\.md$/i, '');
  }

  buildOutputFileName(promptFileName: string): string {
    return promptFileName.replace(/-prompt\.md$/i, '-resultado.md');
  }

  buildTitle(promptFileName: string): string {
    const parts = this.parsePromptFileName(promptFileName);
    if (!parts) {
      return path.parse(promptFileName).name;
    }

    return `Etapa ${parts.stage} - Passo ${parts.step}`;
  }
}
