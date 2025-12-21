import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: themeContract.radius.xs,

    fontWeight: themeContract.font.weight.medium,
    fontFamily: themeContract.font.family.base,

    transition: `
      background-color ${themeContract.motion.medium} ease,
      box-shadow ${themeContract.motion.medium} ease
    `,

    selectors: {
      "&:disabled": { pointerEvents: "none" },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: themeContract.color.brand.primary,
        color: themeContract.color.text.onAccent,
        boxShadow: themeContract.shadow.sm,

        selectors: {
          "&:hover:not(:disabled)": {
            boxShadow: themeContract.shadow.md,
          },
        },
      },

      secondary: {
        backgroundColor: themeContract.color.surface.muted,
        color: themeContract.color.text.secondary,
        boxShadow: themeContract.shadow.sm,

        selectors: {
          "&:hover:not(:disabled)": {
            boxShadow: themeContract.shadow.md,
          },
        },
      },

      ghost: {
        backgroundColor: "transparent",
        color: themeContract.color.text.secondary,
        border: `1px solid ${themeContract.color.border.subtle}`,
        boxShadow: "none",

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: themeContract.color.surface.muted,
          },
        },
      },
    },

    size: {
      sm: {
        width: "35px",
        height: "35px",
        fontSize: themeContract.font.size.md,
      },

      md: {
        width: "39px",
        height: "39px",
        fontSize: themeContract.font.size.lg,
      },

      lg: {
        width: "47px",
        height: "47px",
        fontSize: themeContract.font.size.xl,
      },
    },
  },

  defaultVariants: {
    variant: "ghost",
    size: "md",
  },
});
