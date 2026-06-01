import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneratedFilesModule } from '../generated-files/generated-files.module';
import { GenerationLogsModule } from '../generation-logs/generation-logs.module';
import { PromptsModule } from '../prompts/prompts.module';
import { OllamaModule } from '../ollama/ollama.module';
import { GenerationsController } from './controllers/generations.controller';
import { GenerationEntity } from './entities/generation.entity';
import { GenerationStepEntity } from './entities/generation-step.entity';
import { GenerationRepository } from './repositories/generation.repository';
import { GenerationStepRepository } from './repositories/generation-step.repository';
import { GenerationContextService } from './services/generation-context.service';
import { GenerationRunnerService } from './services/generation-runner.service';
import { GenerationsService } from './services/generations.service';
import { GenerationStatusService } from './services/generation-status.service';
import { GenerationStepOrchestratorService } from './services/generation-step-orchestrator.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GenerationEntity, GenerationStepEntity]),
    PromptsModule,
    OllamaModule,
    GeneratedFilesModule,
    GenerationLogsModule,
  ],
  controllers: [GenerationsController],
  providers: [
    GenerationRepository,
    GenerationStepRepository,
    GenerationContextService,
    GenerationStatusService,
    GenerationStepOrchestratorService,
    GenerationRunnerService,
    GenerationsService,
  ],
  exports: [GenerationsService, GenerationStatusService],
})
export class GenerationsModule {}
