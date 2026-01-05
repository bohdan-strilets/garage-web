import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { root } from './Button.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>
export type ButtonType = 'button' | 'submit' | 'reset'

export type Props = {
  children?: ReactNode
  className?: string
  loading?: boolean
  disabled?: boolean
  type?: ButtonType
}

export type ButtonProps = Props &
  StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>
