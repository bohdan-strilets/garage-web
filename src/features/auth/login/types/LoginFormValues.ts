import type { Infer } from '@shared/lib/zod'

import type { LoginFormSchema } from '../schema/loginFormSchema'

export type LoginFormValues = Infer<typeof LoginFormSchema>
