import type { root } from './IconButton.css'
import type { ButtonProps } from '../Button/Props'
import type { IconName } from '../Icon/types/IconName'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  icon: IconName
  'aria-label': string
}

export type IconButtonProps = Props & StyleProps & Omit<ButtonProps, 'children'>
