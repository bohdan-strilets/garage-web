import { globalStyle } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const THEME_TRANSITION_CLASS = 'theme-transition'
export const DISABLE_THEME_TRANSITION_CLASS = 'disable-theme-transition'
export const THEME_TRANSITION_DURATION_MS = 120

const { duration, easing } = themeContract.motion

globalStyle('body', {
  transition: `
    background-color ${duration.fast} ${easing.standard}, 
    color ${duration.fast} ${easing.standard},
    opacity ${THEME_TRANSITION_DURATION_MS} ease
  `,
})

globalStyle(`body.${DISABLE_THEME_TRANSITION_CLASS}`, {
  transition: 'none !important',
})

globalStyle(`body.${THEME_TRANSITION_CLASS}`, {
  opacity: '0.98',
})
