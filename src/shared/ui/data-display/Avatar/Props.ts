import type { root } from './Avatar.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  src?: string
  name?: string
  className?: string
}

export type AvatarProps = Props & StyleProps
