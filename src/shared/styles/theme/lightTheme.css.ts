import { createTheme } from '@vanilla-extract/css';

import {
  fonts,
  lightColors,
  lightShadows,
  radius,
  spaces,
  zIndex,
  transitions,
} from './tokens.css';
import { vars } from './vars.css';

export const lightTheme = createTheme(vars, {
  colors: lightColors,
  spaces,
  fonts,
  radius,
  shadows: lightShadows,
  zIndex,
  transitions,
});
