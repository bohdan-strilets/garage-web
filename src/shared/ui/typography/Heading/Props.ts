import type { ReactNode } from 'react'

import type { root } from './Heading.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  children: ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export type HeadingProps = Props & StyleProps
