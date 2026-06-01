import { Module } from '@nestjs/common';
import { OllamaHealthController } from './controllers/ollama-health.controller';
import { OllamaChatService } from './services/ollama-chat.service';
import { OllamaService } from './services/ollama.service';

@Module({
  controllers: [OllamaHealthController],
  providers: [OllamaService, OllamaChatService],
  exports: [OllamaService, OllamaChatService],
})
export class OllamaModule {}
