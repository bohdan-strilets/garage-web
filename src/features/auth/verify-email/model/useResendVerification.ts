import { useMutation } from '@tanstack/react-query'

import type { NormalizedError } from '@shared/api/types/NormalizedError'

import { resendVerification } from '../api/resendVerificationApi'

export const useResendVerification = () => {
  return useMutation<void, NormalizedError>({
    mutationFn: resendVerification,
  })
}
