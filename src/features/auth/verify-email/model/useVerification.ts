import { useMutation } from '@tanstack/react-query'

import type { NormalizedError } from '@shared/api/types/NormalizedError'

import { verification } from '../api/verificationApi'

export const useVerification = (token?: string) => {
  return useMutation<void, NormalizedError>({
    mutationFn: () => verification(token),
  })
}
