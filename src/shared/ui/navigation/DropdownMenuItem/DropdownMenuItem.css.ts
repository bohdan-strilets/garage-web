import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const item = recipe({
  base: {
    width: '100%',
    textAlign: 'left',

    padding: vars.space.sm,
    borderRadius: vars.radius.sm,
  },

  variants: {
    danger: {
      true: { color: vars.color.status.danger },
    },
  },
})
