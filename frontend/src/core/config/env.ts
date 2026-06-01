export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3333',
  logLevel: import.meta.env.VITE_LOG_LEVEL ?? 'trace',
  enableTrace: import.meta.env.VITE_ENABLE_TRACE === 'true',
  enableDebugPanel: import.meta.env.VITE_ENABLE_DEBUG_PANEL !== 'false',
};
