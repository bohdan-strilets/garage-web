import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: themeContract.radius.md,

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
        paddingInline: themeContract.space.xl,
        paddingBlock: themeContract.space.xs,
        fontSize: themeContract.font.size.sm,
      },

      md: {
        paddingInline: themeContract.space["2xl"],
        paddingBlock: themeContract.space.xs,
        fontSize: themeContract.font.size.md,
      },

      lg: {
        paddingInline: themeContract.space["3xl"],
        paddingBlock: themeContract.space.sm,
        fontSize: themeContract.font.size.md,
      },
    },

    fullWidth: {
      true: { width: "100%" },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});
