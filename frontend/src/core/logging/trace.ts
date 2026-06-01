import { logger } from './logger';

export const traceRender = (scope: string, context?: Record<string, unknown>) => {
  logger.trace(`render:${scope}`, context);
};
