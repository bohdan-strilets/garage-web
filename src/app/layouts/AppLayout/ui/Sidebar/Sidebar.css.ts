import { recipe } from '@vanilla-extract/recipes'

import { media, themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: themeContract.zIndex.sidebar,

    height: '100vh',
    width: themeContract.layout.sidebar.expandedWidth,

    backgroundColor: themeContract.color.surface.base,
    borderRight: `1px solid ${themeContract.color.border.subtle}`,
    boxShadow: themeContract.shadow.md,

    transition: `transform
      ${themeContract.motion.duration.base}
      ${themeContract.motion.easing.standard},
      width
      ${themeContract.motion.duration.base}
      ${themeContract.motion.easing.standard}`,

    willChange: 'transform',

    '@media': {
      [media.LAPTOP]: {
        position: 'relative',
        flexShrink: 0,
      },
    },
  },

  variants: {
    state: {
      open: {},
      collapsed: {},
    },
  },

  compoundVariants: [
    {
      variants: { state: 'open' },
      style: {
        transform: 'translateX(0)',

        '@media': {
          [media.LAPTOP]: {
            transform: 'none',
            width: themeContract.layout.sidebar.expandedWidth,
          },
        },
      },
    },

    {
      variants: { state: 'collapsed' },
      style: {
        transform: 'translateX(-100%)',

        '@media': {
          [media.LAPTOP]: {
            transform: 'none',
            width: themeContract.layout.sidebar.collapsedWidth,
          },
        },
      },
    },
  ],
})
