import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { DebugModule } from './debug/debug.module';
import { FilesystemModule } from './filesystem/filesystem.module';
import { GeneratedFilesModule } from './generated-files/generated-files.module';
import { GenerationLogsModule } from './generation-logs/generation-logs.module';
import { GenerationsModule } from './generations/generations.module';
import { HealthModule } from './health/health.module';
import { LoggingModule } from './logging/logging.module';
import { OllamaModule } from './ollama/ollama.module';
import { PromptsModule } from './prompts/prompts.module';

@Module({
  imports: [
    LoggingModule,
    AppConfigModule,
    DatabaseModule,
    FilesystemModule,
    PromptsModule,
    OllamaModule,
    GeneratedFilesModule,
    GenerationLogsModule,
    GenerationsModule,
    HealthModule,
    DebugModule,
  ],
})
export class AppModule {}
