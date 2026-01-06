import type { root } from './Loader.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  inline?: boolean
  className?: string
}

export type LoaderProps = Props & StyleProps
