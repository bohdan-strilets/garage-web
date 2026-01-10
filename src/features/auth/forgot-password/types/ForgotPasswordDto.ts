import type { Infer } from '@shared/lib/zod'

import type { ForgotPasswordDtoSchema } from '../schema/forgotPasswordDtoSchema'

export type ForgotPasswordDto = Infer<typeof ForgotPasswordDtoSchema>
