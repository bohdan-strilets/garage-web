import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = style({
  position: 'relative',
  width: '100%',
})

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  height: themeContract.layout.input.height.md,
  paddingInline: themeContract.space.md,

  backgroundColor: themeContract.color.surface.base,
  border: `1px solid ${themeContract.color.border.subtle}`,
  borderRadius: themeContract.radius.md,

  cursor: 'pointer',
})

export const value = style({
  color: themeContract.color.text.primary,
})

export const placeholder = style({
  color: themeContract.color.text.muted,
})

export const dropdown = style({
  position: 'absolute',
  top: `calc(100% + ${themeContract.space.sm})`,
  left: 0,
  right: 0,
  zIndex: themeContract.zIndex.dropdown,

  backgroundColor: themeContract.color.surface.base,
  borderRadius: themeContract.radius.md,
  boxShadow: themeContract.shadow.lg,
})

export const optionBtn = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    padding: themeContract.space.sm,

    textAlign: 'left',

    background: 'transparent',
    border: 'none',

    cursor: 'pointer',

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: themeContract.color.surface.muted,
      },
    },
  },

  variants: {
    selected: {
      true: {
        fontWeight: 600,
        backgroundColor: themeContract.color.surface.muted,
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
