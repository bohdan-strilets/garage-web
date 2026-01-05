import { globalStyle } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

globalStyle('body', {
  fontFamily: themeContract.font.family.base,
  fontSize: themeContract.font.size.md,
  lineHeight: themeContract.font.lineHeight.normal,

  color: themeContract.color.text.primary,
  backgroundColor: themeContract.color.surface.canvas,

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
  backgroundColor: themeContract.color.brand.primary,
  color: themeContract.color.text.onAccent,
})

globalStyle('html', {
  scrollbarWidth: 'thin',
  scrollbarColor: `
    ${themeContract.color.border.default}
    ${themeContract.color.surface.canvas}
  `,
})
