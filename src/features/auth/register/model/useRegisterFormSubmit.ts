import { applyFormError } from '@shared/api'
import type { NormalizedError } from '@shared/api/types/NormalizedError'
import type { AuthResponse } from '@shared/types/auth'

import { mapRegisterToDto } from './mapRegisterToDto'

import type { RegisterDto } from '../types/RegisterDto'
import type { RegisterFormValues } from '../types/RegisterFormValues'
import type { UseMutationResult } from '@tanstack/react-query'
import type { UseFormReturn } from 'react-hook-form'

export const useRegisterFormSubmit = (
  mutation: UseMutationResult<AuthResponse, NormalizedError, RegisterDto>,
) => {
  const onSubmit = (
    values: RegisterFormValues,
    methods: UseFormReturn<RegisterFormValues>,
  ) => {
    const dto = mapRegisterToDto(values)
    const onError = (error: NormalizedError) =>
      applyFormError(error, methods.setError)

    mutation.mutate(dto, { onError })
  }

  return onSubmit
}
