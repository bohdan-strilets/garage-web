import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  display: 'flex',
  alignItems: 'center',

  flexShrink: 0,
  padding: vars.space.xl,

  backgroundColor: vars.color.surface.base,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  boxShadow: vars.shadow.md,
})
