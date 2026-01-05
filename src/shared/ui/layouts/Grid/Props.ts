import type { ReactNode } from 'react'

import type { root } from './Grid.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  children: ReactNode
  columns?: string
  rows?: string
  className?: string
}

export type GridProps = Props & StyleProps
