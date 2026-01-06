import type { ReactElement, ReactNode } from 'react'

import type { FieldValues, Path } from 'react-hook-form'

export type FormFieldProps<T extends FieldValues> = {
  name: Path<T>
  label?: ReactNode
  required?: boolean
  className?: string

  children: ReactElement
}
