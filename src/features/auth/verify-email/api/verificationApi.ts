import { apiRoutes } from '@shared/api'
import { get } from '@shared/api/http'

export const verification = (token?: string) => {
  return get<void>(apiRoutes.auth.verificationEmail(token))
}
