export interface ColorTokens {
  bg: string;
  surface: string;
  surfaceMuted: string;

  text: string;
  textMuted: string;
  border: string;

  primary: string;
  primarySoft: string;

  success: string;
  warning: string;
  danger: string;
}

export interface ShadowTokens {
  sm: string;
  md: string;
  card: string;
}

export interface RadiusTokens {
  sm: string;
  md: string;
  lg: string;
}

export interface SpaceTokens {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  8: number;
  10: number;
}

export interface FontSizeTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface TypographyTokens {
  fontFamily: string;
  fontSizes: FontSizeTokens;
}

export interface AppTheme {
  colors: ColorTokens;
  shadows: ShadowTokens;
  radii: RadiusTokens;
  space: SpaceTokens;
  typography: TypographyTokens;
}
