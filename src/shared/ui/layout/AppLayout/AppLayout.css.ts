import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  height: '100vh',
  width: '100%',

  backgroundColor: vars.colors.background.muted,
});

export const body = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'stretch',

  flexGrow: 1,
  minHeight: 0,
});
