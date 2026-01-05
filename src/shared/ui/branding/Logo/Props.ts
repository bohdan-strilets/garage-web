import type { image } from './Logo.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof image>

export interface Props {
  className?: string
}

export type LogoProps = Props & StyleProps
