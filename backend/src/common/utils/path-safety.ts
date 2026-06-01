import * as path from 'node:path';

export const assertInsideBaseDir = (
  baseDir: string,
  targetPath: string,
): string => {
  const resolvedBase = path.resolve(baseDir);
  const resolvedTarget = path.resolve(targetPath);

  if (
    resolvedTarget !== resolvedBase &&
    !resolvedTarget.startsWith(`${resolvedBase}${path.sep}`)
  ) {
    throw new Error(`Path traversal blocked: ${resolvedTarget}`);
  }

  return resolvedTarget;
};
