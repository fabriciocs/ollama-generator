import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OllamaService {
  constructor(private readonly configService: ConfigService) {}

  getBaseUrl(): string {
    return this.configService.getOrThrow<string>('ollamaBaseUrl');
  }

  getModel(): string {
    return this.configService.getOrThrow<string>('ollamaModel');
  }

  getTimeoutMs(): number {
    return this.configService.getOrThrow<number>('ollamaTimeoutMs');
  }
}
