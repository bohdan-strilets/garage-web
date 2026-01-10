import type { InputHTMLAttributes } from 'react'

export type PasswordInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
>
