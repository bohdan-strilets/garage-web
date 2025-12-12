import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spaces.xs,
});

export const icon = style({
  width: '72px',
  height: '72px',
});

export const title = style({
  fontWeight: vars.fonts.weights.bold,
  fontSize: vars.fonts.sizes.xxl,
  lineHeight: vars.fonts.lineHeights.tight,
  letterSpacing: '-0.03em',

  marginBottom: vars.spaces.xs,

  color: vars.colors.text.primary,
});

export const subtitle = style({
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  fontSize: vars.fonts.sizes.xs,
  lineHeight: vars.fonts.lineHeights.tight,

  color: vars.colors.text.muted,
});
