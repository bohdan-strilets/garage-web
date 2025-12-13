import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: `${vars.spaces.sm} ${vars.spaces.md}`,
  backgroundColor: vars.colors.background.default,
  border: `1px solid ${vars.colors.border.default}`,
  boxShadow: vars.shadows.xs,
});
