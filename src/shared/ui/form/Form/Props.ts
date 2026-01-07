import type { ReactNode } from 'react'

import type { FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form'

export type FormProps<T extends FieldValues> = {
  onSubmit: (values: T, methods: UseFormReturn<T>) => void | Promise<void>
  children: ReactNode
  className?: string
} & UseFormProps<T>
