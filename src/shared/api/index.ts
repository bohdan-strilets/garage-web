import { httpClient } from './httpClient'
import { authRequestInterceptor } from './interceptors/authInterceptor'
import { errorResponseInterceptor } from './interceptors/errorInterceptor'

httpClient.interceptors.request.use(authRequestInterceptor)
httpClient.interceptors.response.use(
  response => response,
  errorResponseInterceptor,
)

export { httpClient }
