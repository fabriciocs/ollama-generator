import { GenerationStep } from '../../../core/types/api.types';
export type StepStatusListProps = {
  steps: GenerationStep[];
  onRetryStep: (stepId: string) => void;
};
