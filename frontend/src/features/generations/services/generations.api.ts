import { apiClient } from '../../../core/api/apiClient';
import { GenerationRecord } from '../../../core/types/api.types';

export const generationsApi = {
  create: (idea: string) =>
    apiClient.post<GenerationRecord>('/api/generations', { idea }),
  list: () => apiClient.get<GenerationRecord[]>('/api/generations'),
  get: (id: string) => apiClient.get<GenerationRecord>(`/api/generations/${id}`),
};
