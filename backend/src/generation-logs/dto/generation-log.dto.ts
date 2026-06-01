import { AppLogLevel } from '../../common/types/log-level';

export class GenerationLogDto {
  id!: string;
  generationId!: string;
  stepId!: string | null;
  level!: AppLogLevel;
  message!: string;
  metadataJson!: string | null;
  createdAt!: Date;
}
