import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenerationLogsController } from './controllers/generation-logs.controller';
import { GenerationLogEntity } from './entities/generation-log.entity';
import { GenerationLogRepository } from './repositories/generation-log.repository';
import { GenerationLogWriterService } from './services/generation-log-writer.service';
import { GenerationLogsService } from './services/generation-logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenerationLogEntity])],
  controllers: [GenerationLogsController],
  providers: [
    GenerationLogRepository,
    GenerationLogWriterService,
    GenerationLogsService,
  ],
  exports: [
    GenerationLogRepository,
    GenerationLogWriterService,
    GenerationLogsService,
  ],
})
export class GenerationLogsModule {}
