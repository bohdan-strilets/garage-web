import { style } from '@vanilla-extract/css'

import { media } from '@shared/lib/responsive'
import { vars } from '@shared/styles'

export const root = style({
  maxWidth: vars.layout.container.mobile,
  marginInline: 'auto',
  paddingInline: vars.space.md,

  '@media': {
    [media.TABLET]: {
      maxWidth: vars.layout.container.tablet,
    },

    [media.LAPTOP]: {
      maxWidth: vars.layout.container.laptop,
    },

    [media.DESKTOP]: {
      maxWidth: vars.layout.container.desktop,
    },
  },
})
