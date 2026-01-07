import { apiRoutes } from '@shared/api'
import { get } from '@shared/api/http'
import type { AuthResponse } from '@shared/types/auth'

export const getMe = () => {
  return get<AuthResponse>(apiRoutes.auth.me)
}
