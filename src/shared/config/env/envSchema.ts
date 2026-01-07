import { z } from '@shared/lib/zod'

export const envSchema = z.object({
  VITE_API_URL: z.string().url('VITE_API_URL must be a valid URL'),
})
