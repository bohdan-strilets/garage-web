import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  backgroundColor: vars.colors.background.default,
  borderRight: `1px solid ${vars.colors.border.default}`,
  minWidth: '280px',
  padding: vars.spaces.md,
  boxShadow: vars.shadows.md,
});
