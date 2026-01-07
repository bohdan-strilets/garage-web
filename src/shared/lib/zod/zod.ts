import { z } from 'zod'

import type { ZodTypeAny } from 'zod'

export { z }

export type Infer<T extends ZodTypeAny> = z.infer<T>
