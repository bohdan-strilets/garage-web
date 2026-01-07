import type { Infer } from '@shared/lib/zod'

import type { RegisterDtoSchema } from '../model/registerDtoSchema'

export type RegisterDto = Infer<typeof RegisterDtoSchema>
