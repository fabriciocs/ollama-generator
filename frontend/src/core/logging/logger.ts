import { env } from '../config/env';
import { frontendLogStore, FrontendLogLevel } from './logStore';

const priorities: Record<FrontendLogLevel, number> = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
};

const write = (
  level: FrontendLogLevel,
  message: string,
  context?: Record<string, unknown>,
) => {
  if (priorities[level] < priorities[(env.logLevel as FrontendLogLevel) ?? 'trace']) {
    return;
  }
  frontendLogStore.append({ level, message, context });
  console[level === 'trace' ? 'debug' : level](message, context ?? {});
};

export const logger = {
  trace: (message: string, context?: Record<string, unknown>) =>
    write('trace', message, context),
  debug: (message: string, context?: Record<string, unknown>) =>
    write('debug', message, context),
  info: (message: string, context?: Record<string, unknown>) =>
    write('info', message, context),
  warn: (message: string, context?: Record<string, unknown>) =>
    write('warn', message, context),
  error: (message: string, context?: Record<string, unknown>) =>
    write('error', message, context),
};
