import { style } from '@vanilla-extract/css'

import { media, themeContract } from '@shared/styles'

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
