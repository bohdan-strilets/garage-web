import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  flexGrow: 1,

  minWidth: 0,
  padding: vars.spaces.xxxl,

  overflow: 'auto',
});
