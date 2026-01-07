import type { Infer } from '@shared/lib/zod'

import type { RegisterFormSchema } from '../model/registerFormSchema'

export type RegisterFormValues = Infer<typeof RegisterFormSchema>
