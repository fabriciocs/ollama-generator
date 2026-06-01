import { Module } from '@nestjs/common';
import { GenerationLogsModule } from '../generation-logs/generation-logs.module';
import { DebugController } from './debug.controller';
import { DebugService } from './debug.service';

@Module({
  imports: [GenerationLogsModule],
  controllers: [DebugController],
  providers: [DebugService],
})
export class DebugModule {}
