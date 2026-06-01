import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { AppLoggerService } from '../../logging/app-logger.service';
import { PathSafetyService } from './path-safety.service';

@Injectable()
export class FilesystemService {
  constructor(
    private readonly pathSafetyService: PathSafetyService,
    private readonly logger: AppLoggerService,
  ) {}

  async ensureDir(dirPath: string): Promise<void> {
    await fs.mkdir(dirPath, { recursive: true });
  }

  resolveInside(baseDir: string, relativePath: string): string {
    const target = path.resolve(baseDir, relativePath);
    return this.pathSafetyService.assertInside(baseDir, target);
  }

  async readFile(baseDir: string, relativePath: string): Promise<string> {
    const resolvedPath = this.resolveInside(baseDir, relativePath);
    this.logger.debug('Reading file', { baseDir, relativePath, resolvedPath });
    return fs.readFile(resolvedPath, 'utf8');
  }

  async writeFile(
    baseDir: string,
    relativePath: string,
    content: string,
  ): Promise<string> {
    const resolvedPath = this.resolveInside(baseDir, relativePath);
    await fs.mkdir(path.dirname(resolvedPath), { recursive: true });
    await fs.writeFile(resolvedPath, content, 'utf8');
    this.logger.info('File written', {
      resolvedPath,
      sizeBytes: Buffer.byteLength(content),
    });
    return resolvedPath;
  }

  async statFile(absolutePath: string) {
    return fs.stat(absolutePath);
  }

  async listFiles(dirPath: string): Promise<string[]> {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
  }
}
