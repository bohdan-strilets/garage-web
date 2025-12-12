import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    display: 'inline-flex',

    marginLeft: 15,

    color: vars.colors.success.solid,
    backgroundColor: vars.colors.success.soft,
    borderRadius: vars.radius.sm,
    boxShadow: vars.shadows.sm,
  },

  variants: {
    size: {
      sm: {
        padding: vars.spaces.sm,
        fontSize: vars.fonts.sizes.sm,
      },
      md: {
        padding: vars.spaces.md,
        fontSize: vars.fonts.sizes.lg,
      },
      lg: {
        padding: vars.spaces.xl,
        fontSize: vars.fonts.sizes.xl,
      },
    },

    tone: {
      default: {
        color: vars.colors.text.muted,
        backgroundColor: vars.colors.surface.strong,
      },
      success: {
        color: vars.colors.success.solid,
        backgroundColor: vars.colors.success.soft,
      },
      warning: {
        color: vars.colors.warning.solid,
        backgroundColor: vars.colors.warning.soft,
      },
      danger: {
        color: vars.colors.danger.solid,
        backgroundColor: vars.colors.danger.soft,
      },
      info: {
        color: vars.colors.info.solid,
        backgroundColor: vars.colors.info.soft,
      },
      primary: {
        color: vars.colors.primary.solid,
        backgroundColor: vars.colors.primary.soft,
      },
    },

    isGradient: { true: {}, false: {} },
  },

  compoundVariants: [
    {
      variants: { tone: 'default', isGradient: true },
      style: {
        background: `linear-gradient(135deg, ${vars.colors.surface.default} 0%, ${vars.colors.surface.strong} 100%)`,
      },
    },
    {
      variants: { tone: 'success', isGradient: true },
      style: {
        background: `linear-gradient(135deg, ${vars.colors.success.soft} 0%, ${vars.colors.success.solid} 100%)`,
      },
    },
    {
      variants: { tone: 'warning', isGradient: true },
      style: {
        background: `linear-gradient(135deg, ${vars.colors.warning.soft} 0%, ${vars.colors.warning.solid} 100%)`,
      },
    },
    {
      variants: { tone: 'danger', isGradient: true },
      style: {
        background: `linear-gradient(135deg, ${vars.colors.danger.soft} 0%, ${vars.colors.danger.solid} 100%)`,
      },
    },
    {
      variants: { tone: 'info', isGradient: true },
      style: {
        background: `linear-gradient(135deg, ${vars.colors.info.soft} 0%, ${vars.colors.info.solid} 100%)`,
      },
    },
    {
      variants: { tone: 'primary', isGradient: true },
      style: {
        background: `linear-gradient(135deg, ${vars.colors.primary.soft} 0%, ${vars.colors.primary.solid} 100%)`,
      },
    },
  ],
});
