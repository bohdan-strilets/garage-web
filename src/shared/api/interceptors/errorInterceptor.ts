import { normalizeError } from '../errors/normalizeError'

import type { ApiError } from '../types/ApiError'
import type { AxiosError } from 'axios'

export const errorResponseInterceptor = (error: AxiosError<ApiError>) => {
  return Promise.reject(normalizeError(error))
}
