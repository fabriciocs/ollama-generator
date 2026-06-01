import { apiClient } from '../../../core/api/apiClient';
import { HealthResponse } from '../../../core/types/api.types';
export const healthApi = { get: () => apiClient.get<HealthResponse>('/api/health') };
