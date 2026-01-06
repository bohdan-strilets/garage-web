import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import type { root } from './Paragraph.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  children: ReactNode
  className?: string
}

export type DefaultParagraphProps = StyleProps & ComponentPropsWithoutRef<'p'>

export type ParagraphProps = DefaultParagraphProps & Props & StyleProps
