import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OllamaChatService } from '../ollama/services/ollama-chat.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly ollamaChatService: OllamaChatService,
  ) {}

  async getSystemHealth() {
    let ollama: 'ok' | 'error' = 'ok';
    try {
      await this.ollamaChatService.healthCheck();
    } catch {
      ollama = 'error';
    }

    return {
      status: 'ok',
      api: 'ok',
      database: this.dataSource.isInitialized ? 'ok' : 'error',
      ollama,
      timestamp: new Date().toISOString(),
    };
  }

  getDatabaseHealth() {
    return {
      status: this.dataSource.isInitialized ? 'ok' : 'error',
      database: this.dataSource.isInitialized ? 'ok' : 'error',
      timestamp: new Date().toISOString(),
    };
  }
}
