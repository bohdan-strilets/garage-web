import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '330px',
});

export const button = style({
  marginRight: vars.spaces.sm,
});

export const label = style({
  marginLeft: vars.spaces.lg,
});
