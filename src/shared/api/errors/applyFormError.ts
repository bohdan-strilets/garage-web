import { codeToFieldMap } from './codeToFieldMap'

import type { NormalizedError } from '../types/NormalizedError'
import type { FieldValues, UseFormSetError, Path } from 'react-hook-form'

export const applyFormError = <T extends FieldValues>(
  error: NormalizedError,
  setError: UseFormSetError<T>,
) => {
  const message = error.message

  if (error.code === 'UNKNOWN_ERROR') {
    setError('root', { type: 'server', message })
    return
  }

  const target = codeToFieldMap[error.code]

  if (!target || target === 'root') {
    setError('root', { type: 'server', message })
    return
  }

  setError(target as Path<T>, { type: 'server', message })
}
