import { apiClient } from '../../../core/api/apiClient';
import { GeneratedFileRecord } from '../../../core/types/api.types';
export const generatedFilesApi = {
  list: (generationId: string) =>
    apiClient.get<GeneratedFileRecord[]>(`/api/generated-files/${generationId}`),
};
