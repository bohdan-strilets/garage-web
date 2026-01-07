import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  display: 'flex',
  alignItems: 'center',

  flexShrink: 0,
  height: vars.layout.header.height,
  padding: vars.space.md,

  backgroundColor: vars.color.surface.base,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  boxShadow: vars.shadow.md,
})
