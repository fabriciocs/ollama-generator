import { GenerationStatus, StepStatus } from './status.types';

export type GenerationStepExecution = {
  id: string;
  generationId: string;
  stepId: string;
  attemptNumber: number;
  status: StepStatus;
  promptPath: string | null;
  outputFile: string | null;
  inputSnapshotJson: string | null;
  outputHash: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  durationMs: number | null;
  errorMessage: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GenerationStep = {
  id: string;
  stepKey: string;
  title: string;
  promptPath: string;
  outputFile: string;
  status: StepStatus;
  startedAt: string | null;
  finishedAt: string | null;
  durationMs: number | null;
  errorMessage: string | null;
  orderIndex: number;
  executions?: GenerationStepExecution[];
};

export type GenerationRecord = {
  id: string;
  productName: string;
  outputDir: string;
  status: GenerationStatus;
  currentStepKey: string | null;
  errorMessage: string | null;
  lastGeneratedFile: string | null;
  createdAt: string;
  updatedAt: string;
  finishedAt: string | null;
  steps: GenerationStep[];
};

export type HealthResponse = {
  status: string;
  api: string;
  database: string;
  ollama: string;
  timestamp: string;
};

export type PromptFile = {
  fileName: string;
  relativePath: string;
  absolutePath: string;
  sizeBytes: number;
};

export type DebugResponse = {
  backend: Array<Record<string, unknown>>;
  generations: Array<Record<string, unknown>>;
};

export type GeneratedFileRecord = {
  id: string;
  fileName: string;
  relativePath: string;
  absolutePath: string;
  sizeBytes: number;
  mimeType: string;
  createdAt: string;
};
