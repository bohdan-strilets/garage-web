import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const wrapper = style({
  position: 'relative',
  width: '100%',
})

export const toggle = style({
  position: 'absolute',
  top: '50%',
  right: vars.space.md,
  transform: 'translateY(-50%)',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: vars.layout.input.size.sm,
  width: vars.layout.input.size.sm,

  color: vars.color.text.muted,
  cursor: 'pointer',
})
