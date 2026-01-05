import { createTheme } from '@vanilla-extract/css'

import { themeContract } from './contract.css'
import { sharedThemeValues } from './sharedValues'

export const lightTheme = createTheme(themeContract, {
  color: {
    brand: {
      primary: '#f2a93b',
    },

    surface: {
      canvas: '#f8f9fb',
      base: '#ffffff',
      muted: '#f1f3f7',
      inverted: '#181c24',
    },

    text: {
      primary: '#1f2430',
      secondary: '#4f566b',
      muted: '#8a90a3',
      inverted: '#ffffff',
      onAccent: '#1f2430',
    },

    border: {
      subtle: '#e4e7ee',
      default: '#d5dae4',
      accent: '#f2a93b',
    },

    status: {
      success: '#3cb179',
      warning: '#e6b800',
      danger: '#e35d4f',
    },
  },

  shadow: {
    sm: '0 2px 6px rgba(31,36,48,0.06)',
    md: '0 10px 28px rgba(31,36,48,0.10)',
    lg: '0 20px 48px rgba(31,36,48,0.14)',
  },

  ...sharedThemeValues,
})
