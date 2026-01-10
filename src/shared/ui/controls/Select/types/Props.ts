import type { SelectOption } from './SelectOption'

export type SelectProps = {
  value?: string
  onChange?: (value: string) => void

  options: readonly SelectOption[]
  placeholder?: string
  disabled?: boolean

  className?: string
}
