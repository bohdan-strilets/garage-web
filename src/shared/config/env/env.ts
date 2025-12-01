import { envSchema } from './envSchema';

const parsed = envSchema.validateSync(import.meta.env);

export const Env = {
  API_URL: parsed.VITE_API_URL,
} as const;
