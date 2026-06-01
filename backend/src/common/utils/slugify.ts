import * as fs from 'node:fs';
import * as path from 'node:path';

export const slugifyProductName = (
  value: string,
  outputBaseDir?: string,
): string => {
  const baseSlug =
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60) || 'produto-gerado';

  if (!outputBaseDir) {
    return baseSlug;
  }

  let candidate = baseSlug;
  let counter = 2;

  while (fs.existsSync(path.join(outputBaseDir, candidate))) {
    candidate = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return candidate;
};
