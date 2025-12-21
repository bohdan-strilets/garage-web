import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {},

  variants: {
    padding: {
      none: { padding: themeContract.space.none },
      xs: { padding: themeContract.space.xs },
      sm: { padding: themeContract.space.sm },
      md: { padding: themeContract.space.md },
      lg: { padding: themeContract.space.lg },
      xl: { padding: themeContract.space.xl },
      ["2xl"]: { padding: themeContract.space["2xl"] },
      ["3xl"]: { padding: themeContract.space["3xl"] },
    },

    paddingX: {
      none: { paddingInline: themeContract.space.none },
      xs: { paddingInline: themeContract.space.xs },
      sm: { paddingInline: themeContract.space.sm },
      md: { paddingInline: themeContract.space.md },
      lg: { paddingInline: themeContract.space.lg },
      xl: { paddingInline: themeContract.space.xl },
      ["2xl"]: { paddingInline: themeContract.space["2xl"] },
      ["3xl"]: { paddingInline: themeContract.space["3xl"] },
    },

    paddingY: {
      none: { paddingBlock: themeContract.space.none },
      xs: { paddingBlock: themeContract.space.xs },
      sm: { paddingBlock: themeContract.space.sm },
      md: { paddingBlock: themeContract.space.md },
      lg: { paddingBlock: themeContract.space.lg },
      xl: { paddingBlock: themeContract.space.xl },
      ["2xl"]: { paddingBlock: themeContract.space["2xl"] },
      ["3xl"]: { paddingBlock: themeContract.space["3xl"] },
    },

    tone: {
      transparent: { backgroundColor: "transparent" },
      muted: { backgroundColor: themeContract.color.surface.muted },
    },

    border: {
      none: { border: "none" },
      subtle: { border: `1px solid ${themeContract.color.border.subtle}` },
    },
  },

  defaultVariants: {
    padding: "none",
    tone: "transparent",
    border: "none",
  },
});
