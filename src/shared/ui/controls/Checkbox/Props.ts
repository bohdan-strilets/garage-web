import type { InputHTMLAttributes, ReactNode } from 'react'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: ReactNode
}
