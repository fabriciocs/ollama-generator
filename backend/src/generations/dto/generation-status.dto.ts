import { GenerationStepDto } from './generation-step.dto';

export class GenerationStatusDto {
  id!: string;
  productName!: string;
  outputDir!: string;
  status!: string;
  currentStepKey!: string | null;
  errorMessage!: string | null;
  lastGeneratedFile!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  finishedAt!: Date | null;
  steps!: GenerationStepDto[];
}
