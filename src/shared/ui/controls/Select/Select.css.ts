import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = style({
  position: 'relative',
  width: '100%',
})

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  height: vars.layout.input.size.md,
  paddingInline: vars.space.md,

  backgroundColor: vars.color.surface.base,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.sm,

  cursor: 'pointer',
})

export const value = style({
  color: vars.color.text.primary,
})

export const placeholder = style({
  color: vars.color.text.muted,
})

export const dropdown = style({
  position: 'absolute',
  top: `calc(100% + ${vars.space.sm})`,
  left: 0,
  right: 0,
  zIndex: vars.zIndex.dropdown,

  backgroundColor: vars.color.surface.base,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.lg,
})

export const optionBtn = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    padding: vars.space.sm,

    textAlign: 'left',

    background: 'transparent',
    border: 'none',

    cursor: 'pointer',

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.surface.muted,
      },
    },
  },

  variants: {
    selected: {
      true: {
        fontWeight: 600,
        backgroundColor: vars.color.surface.muted,
      },
      false: {},
    },
  },

  defaultVariants: {
    selected: false,
  },
})

export const checkIcon = recipe({
  base: {
    marginLeft: 'auto',
    pointerEvents: 'none',
  },

  variants: {
    visible: {
      true: { opacity: 1 },
      false: { opacity: 0 },
    },
  },
})
