import { env } from '../config/env';
import { logger } from '../logging/logger';
import { ApiError } from './apiErrors';
import { traceHttpEnd, traceHttpStart } from './httpTrace';

async function request<T>(input: string, init?: RequestInit): Promise<T> {
  const url = `${env.apiBaseUrl}${input}`;
  const method = init?.method ?? 'GET';
  const startedAt = performance.now();
  traceHttpStart(url, method);

  let response: Response;
  try {
    response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
      ...init,
    });
  } catch (error) {
    const durationMs = performance.now() - startedAt;
    traceHttpEnd(url, method, 0, durationMs);
    logger.error('http:network-error', {
      url,
      method,
      durationMs,
      error: error instanceof Error ? error.message : String(error),
    });
    throw new ApiError('Nao foi possivel conectar ao backend.', 0);
  }

  traceHttpEnd(url, method, response.status, performance.now() - startedAt);
  if (!response.ok) {
    const text = await response.text();
    logger.error('http:error', { url, method, status: response.status, text });
    throw new ApiError(text || 'Request failed', response.status);
  }

  return (await response.json()) as T;
}

export const apiClient = {
  get: <T>(input: string) => request<T>(input),
  post: <T>(input: string, body: unknown) =>
    request<T>(input, { method: 'POST', body: JSON.stringify(body) }),
};
