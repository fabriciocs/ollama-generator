import { logger } from '../logging/logger';

export const traceHttpStart = (url: string, method: string) =>
  logger.debug('http:start', { url, method });

export const traceHttpEnd = (
  url: string,
  method: string,
  status: number,
  durationMs: number,
) => logger.info('http:end', { url, method, status, durationMs });
