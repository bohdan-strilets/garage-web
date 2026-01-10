import { useMutation } from '@tanstack/react-query'

import type { NormalizedError } from '@shared/api/types/NormalizedError'

import { forgotPassword } from '../api/forgotPasswordApi'

import type { ForgotPasswordDto } from '../types/ForgotPasswordDto'

export const useForgotPassword = () => {
  return useMutation<void, NormalizedError, ForgotPasswordDto>({
    mutationFn: forgotPassword,
  })
}
