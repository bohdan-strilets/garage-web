import { apiRoutes } from '@shared/api'
import { post } from '@shared/api/http'
import type { AuthResponse } from '@shared/types/auth'

import type { LoginDto } from '../types/LoginDto'

export const login = (dto: LoginDto) => {
  return post<AuthResponse, LoginDto>(apiRoutes.auth.login, dto)
}
