import { apiClient } from '../../../core/api/apiClient';
import { PromptFile } from '../../../core/types/api.types';
export const promptsApi = { list: () => apiClient.get<PromptFile[]>('/api/prompts') };
