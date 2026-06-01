import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { AppLoggerService } from '../../logging/app-logger.service';
import { OllamaService } from './ollama.service';

@Injectable()
export class OllamaChatService {
  constructor(
    private readonly ollamaService: OllamaService,
    private readonly logger: AppLoggerService,
  ) {}

  async healthCheck(): Promise<{ status: 'ok' | 'error'; model: string }> {
    const response = await fetch(`${this.ollamaService.getBaseUrl()}/api/tags`);
    if (!response.ok) {
      throw new ServiceUnavailableException('Ollama unavailable');
    }
    return { status: 'ok', model: this.ollamaService.getModel() };
  }

  async chat(
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>,
  ) {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      this.ollamaService.getTimeoutMs(),
    );
    const startedAt = Date.now();

    try {
      this.logger.info('Ollama chat started', {
        endpoint: `${this.ollamaService.getBaseUrl()}/api/chat`,
        model: this.ollamaService.getModel(),
      });
      const response = await fetch(
        `${this.ollamaService.getBaseUrl()}/api/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: this.ollamaService.getModel(),
            stream: false,
            messages,
          }),
          signal: controller.signal,
        },
      );

      if (!response.ok) {
        throw new ServiceUnavailableException(
          `Ollama error: ${response.status}`,
        );
      }

      const json = (await response.json()) as {
        message?: { content?: string };
      };
      const content = json.message?.content?.trim();
      if (!content) {
        throw new ServiceUnavailableException(
          'Ollama returned an empty response',
        );
      }
      this.logger.info('Ollama chat finished', {
        durationMs: Date.now() - startedAt,
        sizeBytes: Buffer.byteLength(content),
      });
      return content;
    } catch (error) {
      this.logger.error('Ollama chat failed', {
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }
}
