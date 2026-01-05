import { createTheme } from '@vanilla-extract/css'

import { darkColor } from '../tokens/darkColor'
import { darkShadow } from '../tokens/darkShadow'
import { sharedThemeValues } from '../tokens/sharedThemeValues'

import { themeContract } from './contract.css'

export const darkTheme = createTheme(themeContract, {
  color: darkColor,
  shadow: darkShadow,
  ...sharedThemeValues,
})
