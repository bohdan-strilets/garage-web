import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const toggle = style({
  position: 'relative',

  background: vars.color.surface.muted,
  borderRadius: vars.radius.pill,
  border: 'none',

  width: vars.layout.switcher.width,
  padding: vars.space.xs,

  cursor: 'pointer',

  transition: `background
	  ${vars.motion.duration.slow}
	  ${vars.motion.easing.standard}`,
})

export const thumb = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: vars.layout.switcher.thumbSize,
    height: vars.layout.switcher.thumbSize,

    borderRadius: vars.radius.pill,
    background: vars.color.brand.primarySoft,

    transition: `transform
    ${vars.motion.duration.slow}
    ${vars.motion.easing.standard}`,
  },

  variants: {
    isActive: {
      true: { transform: 'translateX(100%)' },
      false: { transform: 'translateX(0)' },
    },
  },
})
