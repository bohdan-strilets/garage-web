import { style } from '@vanilla-extract/css'

import { themeContract } from '../theme/contract.css'
import { interaction } from '../tokens/interaction'

const focusOffset = interaction.focus.ringOffset
const focusWidth = interaction.focus.ringWidth

const focusRing = themeContract.color.border.accent
const focusGlow = `color-mix(
  in srgb,
  ${focusRing} 40%,
  transparent
)`

const focusBoxShadow = `
  0 0 0 ${focusOffset} transparent,
  0 0 0 calc(${focusOffset} + ${focusWidth}) ${focusGlow}
`

export const focusable = style({
  ':focus-visible': {
    outline: 'none',
    boxShadow: focusBoxShadow,
    borderRadius: themeContract.radius.sm,
  },
})
