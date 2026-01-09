import type { Infer } from '@shared/lib/zod'

import type { LoginDtoSchema } from '../model/loginDtoSchema'

export type LoginDto = Infer<typeof LoginDtoSchema>
