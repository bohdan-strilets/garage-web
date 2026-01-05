import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'
import { media } from '@shared/styles/theme/media'

export const root = style({
  maxWidth: themeContract.layout.container.mobile,
  marginInline: 'auto',
  paddingInline: themeContract.space.md,

  '@media': {
    [media.TABLET]: {
      maxWidth: themeContract.layout.container.tablet,
    },

    [media.LAPTOP]: {
      maxWidth: themeContract.layout.container.laptop,
    },

    [media.DESKTOP]: {
      maxWidth: themeContract.layout.container.desktop,
    },
  },
})
