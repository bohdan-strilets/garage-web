import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: vars.fonts.weights.medium,
    fontSize: vars.fonts.sizes.sm,

    border: 'none',
    color: vars.colors.text.primary,
    borderRadius: vars.radius.sm,
    boxShadow: vars.shadows.md,

    cursor: 'pointer',
    transition: `background-color ${vars.transitions.normal} ${vars.transitions.easingStandard}, box-shadow ${vars.transitions.normal} ${vars.transitions.easingStandard}, transform ${vars.transitions.fast} ${vars.transitions.easingStandard}`,

    selectors: {
      '&:hover:not(:disabled)': {
        boxShadow: vars.shadows.lg,
        transform: 'translateY(-1px)',
      },
      '&:active:not(:disabled)': {
        boxShadow: vars.shadows.sm,
        transform: 'translateY(0)',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
  },

  variants: {
    tone: {
      primary: { backgroundColor: vars.colors.primary.solid },
      danger: { backgroundColor: vars.colors.danger.soft },
      success: { backgroundColor: vars.colors.success.soft },
      warning: { backgroundColor: vars.colors.warning.soft },
      info: { backgroundColor: vars.colors.info.soft },
      muted: { backgroundColor: vars.colors.background.muted },
      ghost: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.colors.border.muted}`,
      },
      inverted: {
        backgroundColor: vars.colors.background.inverted,
        color: vars.colors.text.inverted,
      },
    },

    size: {
      sm: { height: 32, padding: `0 ${vars.spaces.xxl}` },
      md: { height: 44, padding: `0 ${vars.spaces.xxxl}` },
      lg: { height: 56, padding: `0 ${vars.spaces.xxxl}` },
    },

    fullWidth: {
      true: { width: '100%' },
      false: { width: 'auto' },
    },
  },
});
