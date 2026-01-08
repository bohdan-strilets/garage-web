import type { InputHTMLAttributes, ReactElement, ReactNode } from 'react'

import type { FieldValues, Path } from 'react-hook-form'

export type ControlledInputProps = InputHTMLAttributes<HTMLInputElement>

export type FormFieldProps<T extends FieldValues> = {
  name: Path<T>
  label?: ReactNode
  helperText?: string
  required?: boolean
  className?: string

  children: ReactElement<ControlledInputProps>
}
