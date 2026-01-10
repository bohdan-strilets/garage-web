import { useMutation } from '@tanstack/react-query'

import { errorCodeMap } from '@shared/api/errors/errorCodeMap'
import { errorMessageMap } from '@shared/api/errors/errorMessageMap'
import type { NormalizedError } from '@shared/api/types/NormalizedError'
import { notify } from '@shared/lib/notify'

import { resendVerification } from '../api/resendVerificationApi'

export const useResendVerification = () => {
  const onSuccess = () => {
    notify.success('Verification email resent successfully.')
  }

  const onError = (error: NormalizedError) => {
    switch (error.code) {
      case errorCodeMap.EMAIL_ALREADY_VERIFIED:
        notify.error(errorMessageMap.EMAIL_ALREADY_VERIFIED)
        break

      case errorCodeMap.EMAIL_VERIFICATION_RESEND_TOO_SOON:
        notify.error(errorMessageMap.EMAIL_VERIFICATION_RESEND_TOO_SOON)
        break

      default:
        break
    }
  }

  return useMutation<void, NormalizedError>({
    mutationFn: resendVerification,
    onSuccess,
    onError,
  })
}
