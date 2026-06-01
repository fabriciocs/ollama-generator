import { Injectable } from '@nestjs/common';
import { assertInsideBaseDir } from '../../common/utils/path-safety';

@Injectable()
export class PathSafetyService {
  assertInside(baseDir: string, targetPath: string): string {
    return assertInsideBaseDir(baseDir, targetPath);
  }
}
