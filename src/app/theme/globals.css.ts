import { globalStyle } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

globalStyle('body', {
  fontFamily: vars.font.family.base,
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.normal,

  color: vars.color.text.primary,
  backgroundColor: vars.color.surface.canvas,

  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('button, input, textarea, select', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
})

globalStyle('button', {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
})

globalStyle(':focus-visible', {
  outline: 'none',
})

globalStyle('::selection', {
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.onAccent,
})

globalStyle('html', {
  scrollbarWidth: 'thin',
  scrollbarColor: `
    ${vars.color.border.default}
    ${vars.color.surface.canvas}
  `,
})
