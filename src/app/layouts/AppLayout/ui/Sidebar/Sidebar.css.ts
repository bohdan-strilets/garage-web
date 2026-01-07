import { recipe } from '@vanilla-extract/recipes'

import { media } from '@shared/lib/responsive'
import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: vars.zIndex.sidebar,

    height: '100vh',
    width: vars.layout.sidebar.expandedWidth,
    padding: vars.space.md,

    backgroundColor: vars.color.surface.base,
    borderRight: `1px solid ${vars.color.border.subtle}`,
    boxShadow: vars.shadow.md,

    transition: `transform
      ${vars.motion.duration.base}
      ${vars.motion.easing.standard},
      width
      ${vars.motion.duration.base}
      ${vars.motion.easing.standard}`,

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
            width: vars.layout.sidebar.expandedWidth,
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
            width: vars.layout.sidebar.collapsedWidth,
          },
        },
      },
    },
  ],
})
