import type { Infer } from '@shared/lib/zod'

import type { ForgotPasswordSchema } from '../schema/forgotPasswordSchema'

export type ForgotPasswordFormValues = Infer<typeof ForgotPasswordSchema>
