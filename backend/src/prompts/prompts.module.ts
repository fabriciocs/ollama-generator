import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromptFileEntity } from './entities/prompt-file.entity';
import { PromptsController } from './controllers/prompts.controller';
import { PromptFileRepository } from './repositories/prompt-file.repository';
import { PromptCatalogService } from './services/prompt-catalog.service';
import { PromptReaderService } from './services/prompt-reader.service';
import { PromptsService } from './services/prompts.service';

@Module({
  imports: [TypeOrmModule.forFeature([PromptFileEntity])],
  controllers: [PromptsController],
  providers: [
    PromptFileRepository,
    PromptReaderService,
    PromptCatalogService,
    PromptsService,
  ],
  exports: [PromptReaderService, PromptCatalogService, PromptsService],
})
export class PromptsModule {}
