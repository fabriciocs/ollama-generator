import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Observable, tap } from 'rxjs';
import { AppLoggerService } from './app-logger.service';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: AppLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<{
      method: string;
      url: string;
      correlationId?: string;
    }>();
    const response = context
      .switchToHttp()
      .getResponse<{ statusCode: number }>();
    const startedAt = Date.now();
    request.correlationId = request.correlationId ?? randomUUID();

    this.logger.debug('HTTP request started', {
      correlationId: request.correlationId,
      method: request.method,
      path: request.url,
    });

    return next.handle().pipe(
      tap(() => {
        this.logger.info('HTTP request completed', {
          correlationId: request.correlationId,
          method: request.method,
          path: request.url,
          statusCode: response.statusCode,
          durationMs: Date.now() - startedAt,
        });
      }),
    );
  }
}
