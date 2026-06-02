import { Injectable } from '@nestjs/common';
import { PromptReaderService } from '../../prompts/services/prompt-reader.service';
import { OllamaChatService } from '../../ollama/services/ollama-chat.service';
import { GeneratedFileWriterService } from '../../generated-files/services/generated-file-writer.service';
import { GenerationLogWriterService } from '../../generation-logs/services/generation-log-writer.service';
import { GenerationContextService } from './generation-context.service';
import { GenerationStepEntity } from '../entities/generation-step.entity';

@Injectable()
export class GenerationStepOrchestratorService {
  constructor(
    private readonly promptReaderService: PromptReaderService,
    private readonly ollamaChatService: OllamaChatService,
    private readonly generatedFileWriterService: GeneratedFileWriterService,
    private readonly generationLogWriterService: GenerationLogWriterService,
    private readonly generationContextService: GenerationContextService,
  ) {}

  async executeStep(params: {
    generationId: string;
    productName: string;
    idea: string;
    outputDir: string;
    step: GenerationStepEntity;
    completedSteps: GenerationStepEntity[];
    artifacts: Record<string, string>;
  }): Promise<string> {
    const systemPrompt = await this.promptReaderService.readPrompt(
      params.step.promptPath,
    );
    await this.generationLogWriterService.write({
      generationId: params.generationId,
      stepId: params.step.id,
      level: 'debug',
      message: 'System prompt read successfully',
      metadata: {
        promptPath: systemPrompt.absolutePath,
        sizeBytes: systemPrompt.sizeBytes,
        hash: systemPrompt.hash,
      },
    });

    const content = await this.ollamaChatService.chat(
      this.generationContextService.buildMessages({
        systemPromptContent: systemPrompt.content,
        idea: params.idea,
        productName: params.productName,
        completedSteps: params.completedSteps,
        artifacts: params.artifacts,
      }),
    );

    await this.generatedFileWriterService.writeGeneratedFile({
      generationId: params.generationId,
      stepId: params.step.id,
      outputDir: params.outputDir,
      fileName: params.step.outputFile,
      content,
    });

    return content;
  }
}
