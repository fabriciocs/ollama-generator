import { Injectable } from '@nestjs/common';
import { GenerationStepEntity } from '../entities/generation-step.entity';

@Injectable()
export class GenerationContextService {
  buildMessages(params: {
    systemPromptContent: string;
    idea: string;
    productName: string;
    completedSteps: GenerationStepEntity[];
    artifacts: Record<string, string>;
  }): Array<{ role: 'system' | 'user'; content: string }> {
    const aestheticReference =
      params.artifacts['step-0'] ?? 'Sem referencia estetica gerada ainda.';
    const previousOutputs = params.completedSteps
      .map(
        (step) => `## ${step.title}\n${params.artifacts[step.stepKey] ?? ''}`,
      )
      .join('\n\n');

    return [
      {
        role: 'system',
        content: params.systemPromptContent,
      },
      {
        role: 'user',
        content: [
          `Produto: ${params.productName}`,
          `Ideia original:\n${params.idea}`,
          `Referencia estetica obrigatoria:\n${aestheticReference}`,
          previousOutputs ? `Saidas anteriores:\n${previousOutputs}` : null,
        ]
          .filter(Boolean)
          .join('\n\n'),
      },
    ];
  }
}
