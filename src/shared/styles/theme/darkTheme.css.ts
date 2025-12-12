import { createTheme } from '@vanilla-extract/css';

import { fonts, radius, spaces, zIndex, transitions, darkColors, darkShadows } from './tokens.css';
import { vars } from './vars.css';

export const darkTheme = createTheme(vars, {
  colors: darkColors,
  spaces,
  fonts,
  radius,
  shadows: darkShadows,
  zIndex,
  transitions,
});
