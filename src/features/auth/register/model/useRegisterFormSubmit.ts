import { applyFormError } from '@shared/api'

import { mapRegisterToDto } from './mapRegisterToDto'
import { useRegister } from './useRegister'

import type { RegisterFormValues } from '../types/RegisterFormValues'
import type { UseFormReturn } from 'react-hook-form'

export const useRegisterFormSubmit = () => {
  const { mutate } = useRegister()

  return (
    values: RegisterFormValues,
    methods: UseFormReturn<RegisterFormValues>,
  ) => {
    const dto = mapRegisterToDto(values)
    mutate(dto, { onError: error => applyFormError(error, methods.setError) })
  }
}
