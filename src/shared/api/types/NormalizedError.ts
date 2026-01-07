import type { ErrorCodes } from './ErrorCodes'

export type NormalizedError = {
  statusCode: number
  code: ErrorCodes | 'UNKNOWN_ERROR'
  message: string
}
