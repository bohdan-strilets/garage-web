import type { ReactNode } from 'react'

import type { FieldValues, UseFormProps, SubmitHandler } from 'react-hook-form'

export interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: SubmitHandler<T>
  children: ReactNode
  className?: string
}
