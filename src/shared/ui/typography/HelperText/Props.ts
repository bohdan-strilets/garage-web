import type { ReactNode } from 'react'

export type Variant = 'muted' | 'success'

export type HelperTextProps = {
  children: ReactNode
  tone?: Variant
  className?: string
}
