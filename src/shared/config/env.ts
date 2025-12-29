import { envSchema } from "./envSchema";

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables", parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = {
  API_URL: parsedEnv.data.VITE_API_URL,
} as const;
