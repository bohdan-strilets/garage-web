import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  fontFamily: vars.font.family.base,
  color: vars.color.text.primary,

  width: '100%',
  height: vars.layout.input.size.md,
  paddingInline: vars.space.md,

  backgroundColor: vars.color.surface.base,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.sm,

  selectors: {
    '&::placeholder': {
      color: vars.color.text.muted,
    },
  },
})
