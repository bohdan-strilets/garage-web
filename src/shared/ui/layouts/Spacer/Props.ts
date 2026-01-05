import type { root } from './Spacer.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  className?: string
}

export type SpacerProps = Props & StyleProps
