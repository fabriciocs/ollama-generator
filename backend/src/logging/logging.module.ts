import { Global, Module } from '@nestjs/common';
import { AppLoggerService } from './app-logger.service';
import { RequestLoggingInterceptor } from './request-logging.interceptor';

@Global()
@Module({
  providers: [AppLoggerService, RequestLoggingInterceptor],
  exports: [AppLoggerService, RequestLoggingInterceptor],
})
export class LoggingModule {}
