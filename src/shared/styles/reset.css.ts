import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme/vars.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body', {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: vars.fonts.sizes.md,
  lineHeight: vars.fonts.lineHeights.relaxed,

  backgroundColor: vars.colors.background.default,
  color: vars.colors.text.primary,

  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root', {
  minHeight: '100%',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: 600,

  margin: 0,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,

  listStyle: 'none',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button', {
  margin: 0,
  padding: 0,

  border: 'none',
  background: 'none',
  color: 'inherit',

  font: 'inherit',

  cursor: 'pointer',
});

globalStyle('input, textarea, select', {
  margin: 0,

  font: 'inherit',

  color: 'inherit',
  backgroundColor: 'transparent',
  borderRadius: 0,
  border: 'none',

  outline: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('[disabled]', {
  cursor: 'not-allowed',
  opacity: 0.6,
});
