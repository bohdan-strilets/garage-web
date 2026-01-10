import { apiRoutes } from '@shared/api'
import { post } from '@shared/api/http'

export const logoutRequest = () => {
  return post<void, void>(apiRoutes.auth.logout)
}
