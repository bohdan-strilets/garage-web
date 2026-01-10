import { applyFormError } from '@shared/api'
import type { NormalizedError } from '@shared/api/types/NormalizedError'
import { notify } from '@shared/lib/notify'

import type { ForgotPasswordDto } from '../types/ForgotPasswordDto'
import type { ForgotPasswordFormValues } from '../types/ForgotPasswordFormValues'
import type { UseMutationResult } from '@tanstack/react-query'
import type { UseFormReturn } from 'react-hook-form'

export const useForgotPasswordFormSubmit = (
  mutation: UseMutationResult<void, NormalizedError, ForgotPasswordDto>,
  startCooldown: (seconds: number) => void,
  cooldownSeconds: number,
) => {
  return (
    values: ForgotPasswordFormValues,
    methods: UseFormReturn<ForgotPasswordFormValues>,
  ) => {
    mutation.mutate(values, {
      onError: error => {
        applyFormError(error, methods.setError)
      },
      onSuccess: () => {
        methods.reset()
        startCooldown(cooldownSeconds)
        notify.success('Password reset link has been sent to your email.')
      },
    })
  }
}
