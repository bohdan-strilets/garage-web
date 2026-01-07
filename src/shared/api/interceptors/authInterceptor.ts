import type { InternalAxiosRequestConfig } from 'axios'

export const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  // Пізніше:
  // const token = authStore.getState().accessToken
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }

  return config
}
