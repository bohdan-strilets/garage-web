import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const item = style({
  width: '100%',
  height: vars.layout.input.size.lg,
})

export const link = style({
  display: 'flex',
  alignItems: 'center',

  borderRadius: vars.radius.md,

  paddingInline: vars.space.md,
  width: '100%',
  height: '100%',
  gap: vars.space.md,
})

export const active = style({
  background: vars.color.brand.primarySoft,
})
