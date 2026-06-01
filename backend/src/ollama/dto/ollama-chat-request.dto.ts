export class OllamaChatRequestDto {
  model!: string;
  messages!: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
  stream?: boolean;
}
