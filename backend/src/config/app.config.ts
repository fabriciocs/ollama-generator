export default () => ({
  port: Number(process.env.PORT ?? 3333),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  databaseUrl: process.env.DATABASE_URL ?? 'file:./data/app.sqlite',
  ollamaBaseUrl: process.env.OLLAMA_BASE_URL ?? 'http://192.168.0.103:11434',
  ollamaModel: process.env.OLLAMA_MODEL ?? 'llama3.1:8b',
  outputBaseDir: process.env.OUTPUT_BASE_DIR ?? './generated',
  promptsBaseDir:
    process.env.PROMPTS_BASE_DIR ??
    'C:\\Users\\Fabricio.Cunha\\Downloads\\prompts\\novos',
  ollamaTimeoutMs: Number(process.env.OLLAMA_TIMEOUT_MS ?? 600000),
  logLevel: process.env.LOG_LEVEL ?? 'trace',
  logDir: process.env.LOG_DIR ?? './logs',
  logToFile: process.env.LOG_TO_FILE ?? 'true',
  logIncludeContent: process.env.LOG_INCLUDE_CONTENT ?? 'false',
});
