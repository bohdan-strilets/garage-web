import type { Infer } from '@shared/lib/zod'

import type { RegisterFormSchema } from '../schema/registerFormSchema'

export type RegisterFormValues = Infer<typeof RegisterFormSchema>
