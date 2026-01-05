import { createTheme } from '@vanilla-extract/css'

import { lightColor } from '../tokens/lightColor'
import { lightShadow } from '../tokens/lightShadow'
import { sharedThemeValues } from '../tokens/sharedThemeValues'

import { themeContract } from './contract.css'

export const lightTheme = createTheme(themeContract, {
  color: lightColor,
  shadow: lightShadow,
  ...sharedThemeValues,
})
