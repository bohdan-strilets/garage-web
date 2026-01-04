import { createTheme } from '@vanilla-extract/css'

import { themeContract } from './contract.css'
import { sharedThemeValues } from './sharedValues'

export const darkTheme = createTheme(themeContract, {
  color: {
    brand: {
      primary: '#f3b86a',
    },

    surface: {
      canvas: '#181c24',
      base: '#202532',
      muted: '#262c3a',
    },

    text: {
      primary: '#e6e9ef',
      secondary: '#c1c7d6',
      muted: '#9aa1b4',
      inverted: '#181c24',
      onAccent: '#202532',
    },

    border: {
      subtle: '#2e3446',
      default: '#3a4158',
      accent: '#f3b86a',
    },

    status: {
      success: '#5bcfa0',
      warning: '#f2c66d',
      danger: '#ff8a7a',
    },
  },

  shadow: {
    sm: '0 2px 12px rgba(0,0,0,0.25)',
    md: '0 16px 40px rgba(0,0,0,0.45)',
    lg: '0 32px 80px rgba(0,0,0,0.65)',
  },

  ...sharedThemeValues,
})
