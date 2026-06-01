import { apiClient } from '../../../core/api/apiClient';
import { DebugResponse } from '../../../core/types/api.types';
export const debugApi = { recent: () => apiClient.get<DebugResponse>('/api/debug/logs/recent') };
