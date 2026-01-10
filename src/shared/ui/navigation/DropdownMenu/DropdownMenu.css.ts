import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  position: 'relative',
})

export const triggerButton = style({
  all: 'unset',
  cursor: 'pointer',
})

export const menu = style({
  position: 'absolute',
  top: '100%',
  right: 0,

  minWidth: vars.layout.dropdownMenu.minWidth,
  marginTop: vars.space.xs,
  padding: vars.space.xs,

  backgroundColor: vars.color.surface.canvas,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.md,
})
