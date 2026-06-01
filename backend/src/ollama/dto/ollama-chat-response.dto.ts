export class OllamaChatResponseDto {
  model!: string;
  message!: { role: string; content: string };
  done!: boolean;
}
