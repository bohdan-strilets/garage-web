import axios from 'axios'

import { env } from '@shared/config/env'

import { authRequestInterceptor } from './interceptors/authInterceptor'
import { errorResponseInterceptor } from './interceptors/errorInterceptor'

export const httpClient = axios.create({
  baseURL: env.API_URL,
  timeout: 10_000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.request.use(authRequestInterceptor)
httpClient.interceptors.response.use(
  response => response,
  errorResponseInterceptor,
)
