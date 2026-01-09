import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import { sessionActions } from '@entities/session'
import type { NormalizedError } from '@shared/api/types/NormalizedError'
import { paths } from '@shared/router'
import type { AuthResponse } from '@shared/types/auth'

import { login } from '../api/loginApi'

import type { LoginDto } from '../types/LoginDto'

export const useLogin = () => {
  const navigate = useNavigate()

  const onSuccess = (data: AuthResponse) => {
    sessionActions.setSession(data)
    navigate({ to: paths.APP.DASHBOARD.ROOT })
  }

  return useMutation<AuthResponse, NormalizedError, LoginDto>({
    mutationFn: login,
    onSuccess,
  })
}
