import type { ReactNode } from 'react'

export interface LabelProps {
  htmlFor?: string
  children: ReactNode
  isRequired?: boolean
  className?: string
}
