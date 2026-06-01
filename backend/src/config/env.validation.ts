import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().default(3333),
  DATABASE_URL: Joi.string().default('file:./data/app.sqlite'),
  OLLAMA_BASE_URL: Joi.string().uri().required(),
  OLLAMA_MODEL: Joi.string().required(),
  OUTPUT_BASE_DIR: Joi.string().required(),
  PROMPTS_BASE_DIR: Joi.string().required(),
  OLLAMA_TIMEOUT_MS: Joi.number().default(600000),
  NODE_ENV: Joi.string().default('development'),
  LOG_LEVEL: Joi.string()
    .valid('trace', 'debug', 'info', 'warn', 'error', 'fatal')
    .default('trace'),
  LOG_PRETTY: Joi.string().default('true'),
  LOG_TO_FILE: Joi.string().default('true'),
  LOG_DIR: Joi.string().default('./logs'),
  LOG_INCLUDE_CONTENT: Joi.string().default('false'),
});
