import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html, body, #root', {
  margin: 0,
  padding: 0,
  height: '100%',
})

globalStyle('h1, h2, h3, h4, h5, h6, p, figure', {
  margin: 0,
})

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

globalStyle('button, input, textarea, select', {
  font: 'inherit',
  margin: 0,
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})
