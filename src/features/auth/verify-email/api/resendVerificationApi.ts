import { apiRoutes } from '@shared/api'
import { post } from '@shared/api/http'

export const resendVerification = () => {
  return post<void, void>(apiRoutes.auth.resendVerification)
}
