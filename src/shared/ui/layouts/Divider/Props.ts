import type { root } from './Divider.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = { className?: string }

export type DividerProps = StyleProps & Props
