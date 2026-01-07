import { errorMessageMap } from './errorMessageMap'

import type { ApiError } from '../types/ApiError'
import type { NormalizedError } from '../types/NormalizedError'
import type { AxiosError } from 'axios'

export const normalizeError = (
  error: AxiosError<ApiError>,
): NormalizedError => {
  if (!error.response) {
    return {
      statusCode: 0,
      code: 'UNKNOWN_ERROR',
      message: 'Network error. Please try again later.',
    }
  }

  const { statusCode, code } = error.response.data

  return {
    statusCode,
    code,
    message: errorMessageMap[code] ?? 'Something went wrong',
  }
}
