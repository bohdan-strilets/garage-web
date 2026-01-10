import { z } from '@shared/lib/zod'

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(254, 'Email is too long')
    .email('Invalid email'),
})
