import type { ReactNode } from 'react'

import type { root } from './Stack.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  children: ReactNode
  as?:
    | 'div'
    | 'section'
    | 'article'
    | 'main'
    | 'header'
    | 'footer'
    | 'aside'
    | 'span'
    | 'nav'
  className?: string
}

export type StackProps = StyleProps & Props
