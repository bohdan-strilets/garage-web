import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import { sessionActions } from '@entities/session'
import type { NormalizedError } from '@shared/api/types/NormalizedError'
import { paths } from '@shared/router'
import type { AuthResponse } from '@shared/types/auth'

import { register } from '../api/registerApi'

import type { RegisterDto } from '../types/RegisterDto'

export const useRegister = () => {
  const navigate = useNavigate()

  const onSuccess = (data: AuthResponse) => {
    sessionActions.setSession(data)
    navigate({ to: paths.AUTH.VERIFY_EMAIL })
  }

  return useMutation<AuthResponse, NormalizedError, RegisterDto>({
    mutationFn: register,
    onSuccess,
  })
}
