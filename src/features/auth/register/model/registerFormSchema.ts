import { z } from '@shared/lib/zod'

export const RegisterFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name is too long')
      .trim(),

    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name is too long'),

    email: z
      .string()
      .min(1, 'Email is required')
      .max(254, 'Email is too long')
      .email('Invalid email'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long'),

    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
