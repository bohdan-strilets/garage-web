import { style } from '@vanilla-extract/css'

import { focusBoxShadow, themeContract } from '@shared/styles'

export const root = style({
  display: 'inline-flex',
  alignItems: 'start',
  gap: themeContract.space.md,

  cursor: 'pointer',
  userSelect: 'none',
})

export const input = style({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
})

export const box = style({
  minWidth: themeContract.layout.checkbox.size,
  minHeight: themeContract.layout.checkbox.size,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: themeContract.color.surface.base,
  border: `1px solid ${themeContract.color.border.default}`,
  borderRadius: themeContract.radius.sm,

  transition: `background-color
    ${themeContract.motion.duration.fast}
    ${themeContract.motion.easing.standard},
    border-color
    ${themeContract.motion.duration.fast}
    ${themeContract.motion.easing.standard}`,

  selectors: {
    [`${input}:checked + &`]: {
      backgroundColor: themeContract.color.brand.primary,
      borderColor: themeContract.color.brand.primary,
    },

    [`${input}:focus-visible + &`]: {
      boxShadow: focusBoxShadow,
      borderRadius: themeContract.radius.sm,
    },
  },
})

export const checkmark = style({
  color: themeContract.color.text.onAccent,
  opacity: 0,
  transition: `opacity
    ${themeContract.motion.duration.fast}
    ${themeContract.motion.easing.standard}`,

  selectors: {
    [`${input}:checked + ${box} &`]: {
      opacity: 1,
    },
  },
})
