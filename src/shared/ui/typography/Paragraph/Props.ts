import type { ReactNode } from 'react'

import type { root } from './Paragraph.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  children: ReactNode
  as?: 'p' | 'span'
  className?: string
}

export type ParagraphProps = Props & StyleProps
