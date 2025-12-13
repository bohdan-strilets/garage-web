import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const mainList = style({});

export const item = style({
  marginBottom: vars.spaces.sm,
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  width: '100%',
  height: '50px',
  padding: `0 ${vars.spaces.md}`,

  border: 'none',
  background: 'transparent',
  borderRadius: vars.radius.sm,

  cursor: 'pointer',
  transition: `background-color ${vars.transitions.normal} ${vars.transitions.easingStandard}`,

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.background.muted,
    },

    '&:focus-visible': {
      backgroundColor: vars.colors.background.muted,
      outline: `2px solid ${vars.colors.ring.outline}`,
      outlineOffset: '2px',
    },
  },
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: vars.colors.text.muted,

  transition: `color ${vars.transitions.normal} ${vars.transitions.easingStandard}`,

  selectors: {
    [`${button}:hover &`]: { color: vars.colors.primary.solid },
    [`${button}:focus-visible &`]: { color: vars.colors.primary.solid },
  },
});

export const label = style({
  marginLeft: vars.spaces.md,
  color: vars.colors.text.secondary,
});

export const profileList = style({
  paddingTop: vars.spaces.md,
  marginTop: 'auto',

  borderTop: `1px solid ${vars.colors.border.muted}`,
});
