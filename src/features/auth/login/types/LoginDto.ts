import type { Infer } from '@shared/lib/zod'

import type { LoginDtoSchema } from '../schema/loginDtoSchema'

export type LoginDto = Infer<typeof LoginDtoSchema>
