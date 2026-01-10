import { style } from '@vanilla-extract/css'

import { focusBoxShadow, vars } from '@shared/styles'

export const root = style({
  display: 'inline-flex',
  alignItems: 'start',
  gap: vars.space.md,

  cursor: 'pointer',
  userSelect: 'none',
})

export const input = style({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
})

export const box = style({
  minWidth: vars.layout.checkbox.size,
  minHeight: vars.layout.checkbox.size,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: vars.color.surface.base,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.sm,

  transition: `background-color
    ${vars.motion.duration.fast}
    ${vars.motion.easing.standard},
    border-color
    ${vars.motion.duration.fast}
    ${vars.motion.easing.standard}`,

  selectors: {
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.brand.primary,
      borderColor: vars.color.brand.primary,
    },

    [`${input}:focus-visible + &`]: {
      boxShadow: focusBoxShadow,
      borderRadius: vars.radius.sm,
    },
  },
})

export const checkmark = style({
  color: vars.color.text.onAccent,
  opacity: 0,
  transition: `opacity
    ${vars.motion.duration.fast}
    ${vars.motion.easing.standard}`,

  selectors: {
    [`${input}:checked + ${box} &`]: {
      opacity: 1,
    },
  },
})
