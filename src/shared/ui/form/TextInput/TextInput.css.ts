import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  fontFamily: themeContract.font.family.base,
  color: themeContract.color.text.primary,

  width: '100%',
  height: themeContract.layout.input.height.md,
  paddingInline: themeContract.space.md,

  backgroundColor: themeContract.color.surface.base,
  border: `1px solid ${themeContract.color.border.subtle}`,
  borderRadius: themeContract.radius.md,
  boxShadow: themeContract.shadow.sm,

  selectors: {
    '&::placeholder': {
      color: themeContract.color.text.muted,
    },
  },
})
