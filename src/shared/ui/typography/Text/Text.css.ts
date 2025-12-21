import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    fontFamily: themeContract.font.family.base,
    margin: 0,
  },

  variants: {
    tone: {
      primary: { color: themeContract.color.text.primary },
      secondary: { color: themeContract.color.text.secondary },
      muted: { color: themeContract.color.text.muted },
      inverted: { color: themeContract.color.text.inverted },
    },

    size: {
      xs: { fontSize: themeContract.font.size.xs },
      sm: { fontSize: themeContract.font.size.sm },
      md: { fontSize: themeContract.font.size.md },
      lg: { fontSize: themeContract.font.size.lg },
    },

    weight: {
      light: { fontWeight: themeContract.font.weight.light },
      normal: { fontWeight: themeContract.font.weight.normal },
      medium: { fontWeight: themeContract.font.weight.medium },
    },

    lineHeight: {
      xs: { lineHeight: themeContract.font.lineHeight.xs },
      sm: { lineHeight: themeContract.font.lineHeight.sm },
      md: { lineHeight: themeContract.font.lineHeight.md },
    },

    letterSpacing: {
      none: { letterSpacing: "normal" },
      xs: { letterSpacing: themeContract.font.letterSpacing.xs },
      sm: { letterSpacing: themeContract.font.letterSpacing.sm },
      md: { letterSpacing: themeContract.font.letterSpacing.md },
    },
  },

  defaultVariants: {
    tone: "secondary",
    size: "md",
    weight: "normal",
    lineHeight: "md",
    letterSpacing: "none",
  },
});
