import type { Infer } from '@shared/lib/zod'

import type { LoginFormSchema } from '../model/loginFormSchema'

export type LoginFormValues = Infer<typeof LoginFormSchema>
