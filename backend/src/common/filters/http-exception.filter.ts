import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppLoggerService } from '../../logging/app-logger.service';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: AppLoggerService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request & { correlationId?: string }>();

    const isHttpException = exception instanceof HttpException;
    const status = isHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const payload = isHttpException
      ? exception.getResponse()
      : 'Internal error';
    const message =
      typeof payload === 'string'
        ? payload
        : ((payload as { message?: string | string[] }).message ??
          'Internal error');

    this.logger.error('Unhandled request exception', {
      correlationId: request.correlationId,
      method: request.method,
      path: request.url,
      status,
      message,
    });

    response.status(status).json({
      statusCode: status,
      message,
      correlationId: request.correlationId ?? null,
      timestamp: new Date().toISOString(),
    });
  }
}
