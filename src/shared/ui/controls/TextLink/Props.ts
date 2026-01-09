import type { ReactNode } from 'react'

import type { StaticPath } from '@shared/router'

import type { root } from './TextLink.css'
import type { LinkProps } from '@tanstack/react-router'
import type { RecipeVariants } from '@vanilla-extract/recipes'

export type StyleProps = RecipeVariants<typeof root>

export type Props = {
  to: StaticPath
  children: ReactNode
  className?: string
}

export type TextLinkProps = Props & LinkProps & StyleProps
