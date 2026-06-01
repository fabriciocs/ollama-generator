import { Injectable, LoggerService } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { AppLogLevel } from '../common/types/log-level';
import { nowIso } from '../common/utils/time';

type LogEntry = {
  timestamp: string;
  level: AppLogLevel;
  message: string;
  context?: Record<string, unknown>;
};

const priority: Record<AppLogLevel, number> = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

@Injectable()
export class AppLoggerService implements LoggerService {
  private readonly recentEntries: LogEntry[] = [];
  private readonly level: AppLogLevel =
    (process.env.LOG_LEVEL as AppLogLevel | undefined) ?? 'trace';
  private readonly logDir = path.resolve(
    process.cwd(),
    process.env.LOG_DIR ?? './logs',
  );
  private readonly logToFile = (process.env.LOG_TO_FILE ?? 'true') === 'true';

  constructor() {
    fs.mkdirSync(this.logDir, { recursive: true });
  }

  getRecentEntries(): LogEntry[] {
    return [...this.recentEntries].reverse();
  }

  trace(message: string, context?: Record<string, unknown>): void {
    this.write('trace', message, context);
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.write('debug', message, context);
  }

  log(message: string, context?: Record<string, unknown>): void {
    this.write('info', message, context);
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.write('info', message, context);
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.write('warn', message, context);
  }

  error(message: string, context?: Record<string, unknown>): void {
    this.write('error', message, context);
  }

  fatal(message: string, context?: Record<string, unknown>): void {
    this.write('fatal', message, context);
  }

  private write(
    level: AppLogLevel,
    message: string,
    context?: Record<string, unknown>,
  ): void {
    if (priority[level] < priority[this.level]) {
      return;
    }

    const entry: LogEntry = {
      timestamp: nowIso(),
      level,
      message,
      context,
    };

    this.recentEntries.push(entry);
    if (this.recentEntries.length > 200) {
      this.recentEntries.shift();
    }

    const line = JSON.stringify(entry);
    const stream =
      level === 'error' || level === 'fatal' ? process.stderr : process.stdout;
    stream.write(`${line}\n`);

    if (this.logToFile) {
      fs.appendFileSync(
        path.join(this.logDir, `backend-${level}.log`),
        `${line}\n`,
      );
      fs.appendFileSync(
        path.join(this.logDir, 'backend-debug.log'),
        `${line}\n`,
      );
    }
  }
}
