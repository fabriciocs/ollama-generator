export class GenerationStepDto {
  id!: string;
  stepKey!: string;
  title!: string;
  promptPath!: string;
  outputFile!: string;
  status!: string;
  startedAt!: Date | null;
  finishedAt!: Date | null;
  durationMs!: number | null;
  errorMessage!: string | null;
  orderIndex!: number;
}
