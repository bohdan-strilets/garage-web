import type { ErrorCodes } from './ErrorCodes'

export type ApiError = {
  statusCode: number
  code: ErrorCodes
}
