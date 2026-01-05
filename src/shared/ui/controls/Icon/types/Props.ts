import type { SVGProps } from 'react'

import type { IconName } from './IconName'
import type { root } from '../Icon.css'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  name: IconName
  className?: string
}

export type IconProps = Props &
  StyleProps &
  Omit<SVGProps<SVGSVGElement>, 'color'>
