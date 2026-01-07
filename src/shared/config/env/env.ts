import { envSchema } from './envSchema'

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
  console.error(
    'Invalid environment variables',
    parsed.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables')
}

export const env = {
  API_URL: parsed.data.VITE_API_URL,
} as const
