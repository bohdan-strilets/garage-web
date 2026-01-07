import type { ApiMeta } from './ApiMeta'

export type ApiSuccess<Data = unknown> = {
  success: true
  message: string | null
  data: Data
  meta?: ApiMeta
}
