import { env } from '../config/env';
import { logger } from '../logging/logger';
import { ApiError } from './apiErrors';
import { traceHttpEnd, traceHttpStart } from './httpTrace';

async function request<T>(input: string, init?: RequestInit): Promise<T> {
  const url = `${env.apiBaseUrl}${input}`;
  const method = init?.method ?? 'GET';
  const startedAt = performance.now();
  traceHttpStart(url, method);

  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init,
  });

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
