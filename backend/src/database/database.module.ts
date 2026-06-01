import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenerationLogEntity } from '../generation-logs/entities/generation-log.entity';
import { GeneratedFileEntity } from '../generated-files/entities/generated-file.entity';
import { GenerationEntity } from '../generations/entities/generation.entity';
import { GenerationStepEntity } from '../generations/entities/generation-step.entity';
import { PromptFileEntity } from '../prompts/entities/prompt-file.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.getOrThrow<string>('databaseUrl');
        const filename = databaseUrl.replace(/^file:/, '');

        return {
          type: 'sqlite' as const,
          database: filename,
          entities: [
            GenerationEntity,
            GenerationStepEntity,
            GeneratedFileEntity,
            GenerationLogEntity,
            PromptFileEntity,
          ],
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
