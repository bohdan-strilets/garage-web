import { applyFormError } from '@shared/api'
import type { NormalizedError } from '@shared/api/types/NormalizedError'
import type { AuthResponse } from '@shared/types/auth'

import { mapLoginToDto } from '../dto/mapLoginToDto'

import type { LoginDto } from '../types/LoginDto'
import type { LoginFormValues } from '../types/LoginFormValues'
import type { UseMutationResult } from '@tanstack/react-query'
import type { UseFormReturn } from 'react-hook-form'

export const useLoginFormSubmit = (
  mutation: UseMutationResult<AuthResponse, NormalizedError, LoginDto>,
) => {
  const onSubmit = (
    values: LoginFormValues,
    methods: UseFormReturn<LoginFormValues>,
  ) => {
    const dto = mapLoginToDto(values)
    const onError = (error: NormalizedError) =>
      applyFormError(error, methods.setError)

    mutation.mutate(dto, { onError })
  }

  return onSubmit
}
