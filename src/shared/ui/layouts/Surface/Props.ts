import type { ReactNode } from 'react'

import type { root } from './Surface.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  children: ReactNode
  className?: string
}

export type SurfaceProps = Props & StyleProps
