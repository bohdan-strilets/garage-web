import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    padding: vars.spaces.xl,

    borderRadius: vars.radius.md,
    border: `1px solid transparent`,

    transition: `transform ${vars.transitions.slow} ${vars.transitions.easingEmphasized}`,
  },

  variants: {
    tone: {
      default: { backgroundColor: vars.colors.surface.default },
      muted: { backgroundColor: vars.colors.surface.muted },
      strong: { backgroundColor: vars.colors.surface.strong },
      primary: { backgroundColor: vars.colors.primary.soft },
      success: { backgroundColor: vars.colors.success.soft },
      warning: { backgroundColor: vars.colors.warning.soft },
      danger: { backgroundColor: vars.colors.danger.soft },
      info: { backgroundColor: vars.colors.info.soft },
      none: { backgroundColor: 'transparent' },
    },

    border: {
      default: { borderColor: vars.colors.border.default },
      muted: { borderColor: vars.colors.border.muted },
      strong: { borderColor: vars.colors.border.strong },
      primary: { borderColor: vars.colors.primary.solid },
      success: { borderColor: vars.colors.success.solid },
      warning: { borderColor: vars.colors.warning.solid },
      danger: { borderColor: vars.colors.danger.solid },
      info: { borderColor: vars.colors.info.solid },
      none: { borderColor: 'transparent' },
    },

    fullWidth: {
      true: { width: '100%' },
      false: { width: 'auto' },
    },

    interactive: {
      true: {
        cursor: 'pointer',

        selectors: {
          '&:hover, &:focus': { transform: 'translateY(-1.5px)' },
          '&:focus-visible': {
            outline: `2px solid ${vars.colors.ring.outline}`,
            outlineOffset: '2px',
          },
        },
      },
      false: { cursor: 'default' },
    },

    elevation: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: vars.shadows.sm },
      md: { boxShadow: vars.shadows.md },
      lg: { boxShadow: vars.shadows.lg },
    },
  },
});
