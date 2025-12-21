import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    width: "100%",
    padding: `0 ${themeContract.space.sm}`,

    fontFamily: themeContract.font.family.base,
    fontSize: themeContract.font.size.sm,
    lineHeight: themeContract.font.lineHeight.sm,

    color: themeContract.color.text.primary,
    backgroundColor: themeContract.color.surface.base,

    borderRadius: themeContract.radius.md,
    border: `1px solid ${themeContract.color.border.subtle}`,

    outline: "none",
    transition: `border-color ${themeContract.motion.fast} ease, box-shadow ${themeContract.motion.fast} ease`,

    selectors: {
      "&::placeholder": {
        color: themeContract.color.text.muted,
      },

      "&:hover": {
        borderColor: themeContract.color.border.strong,
      },

      "&:disabled": {
        backgroundColor: themeContract.color.surface.muted,
        color: themeContract.color.text.muted,
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    hasError: {
      true: {
        borderColor: themeContract.color.status.danger,

        selectors: {
          "&:focus-visible": { borderColor: themeContract.color.status.danger },
        },
      },
    },

    size: {
      sm: {
        paddingBlock: themeContract.space.xs,
        fontSize: themeContract.font.size.sm,
      },

      md: {
        paddingBlock: themeContract.space.xs,
        fontSize: themeContract.font.size.md,
      },

      lg: {
        paddingBlock: themeContract.space.sm,
        fontSize: themeContract.font.size.md,
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
