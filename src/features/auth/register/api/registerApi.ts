import { apiRoutes } from '@shared/api'
import { post } from '@shared/api/http'
import type { AuthResponse } from '@shared/types/auth'

import type { RegisterDto } from '../types/RegisterDto'

export const register = (dto: RegisterDto) => {
  return post<AuthResponse, RegisterDto>(apiRoutes.auth.register, dto)
}
