/* eslint-disable no-unused-vars */
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
  successSoft: string;
  warningSoft: string;
  dangerSoft: string;
}

export interface ShadowTokens {
  sm: string;
  md: string;
  card: string;
  insetSm: string;
}

export interface RadiusTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface SpaceTokens {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
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

export interface FontFamilyTokens {
  montserrat: string;
  lobster: string;
}

export interface TypographyTokens {
  fontFamily: FontFamilyTokens;
  fontSizes: FontSizeTokens;
}

export interface InputTokens {
  bg: string;
  border: string;
  focus: string;
  placeholder: string;
}

export interface FocusRingTokens {
  color: string;
  width: string;
}

export interface OverlayTokens {
  color: string;
}

export interface TransitionTokens {
  fast: string;
  normal: string;
  slow: string;
}

export type BreakpointKey = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export interface BreakpointTokens {
  values: Record<BreakpointKey, number>;
  up: (key: BreakpointKey) => string;
  down: (key: BreakpointKey) => string;
  between: (min: BreakpointKey, max: BreakpointKey) => string;
}

export interface AppTheme {
  colors: ColorTokens;
  shadows: ShadowTokens;
  radii: RadiusTokens;
  space: SpaceTokens;
  typography: TypographyTokens;
  input: InputTokens;
  focusRing: FocusRingTokens;
  overlay: OverlayTokens;
  transitions: TransitionTokens;
  breakpoints: BreakpointTokens;
}
