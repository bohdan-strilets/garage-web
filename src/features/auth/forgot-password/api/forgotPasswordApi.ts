import { apiRoutes } from '@shared/api'
import { post } from '@shared/api/http'

import type { ForgotPasswordDto } from '../types/ForgotPasswordDto'

export const forgotPassword = (dto: ForgotPasswordDto) => {
  return post<void, ForgotPasswordDto>(apiRoutes.auth.forgotPassword, dto)
}
