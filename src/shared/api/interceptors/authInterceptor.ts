import { sessionSelectors } from '@entities/session'

import type { InternalAxiosRequestConfig } from 'axios'

export const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = sessionSelectors.getAccessToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}
