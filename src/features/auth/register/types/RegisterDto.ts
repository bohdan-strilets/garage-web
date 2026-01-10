import type { Infer } from '@shared/lib/zod'

import type { RegisterDtoSchema } from '../schema/registerDtoSchema'

export type RegisterDto = Infer<typeof RegisterDtoSchema>
