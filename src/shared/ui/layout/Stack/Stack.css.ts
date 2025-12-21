import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "flex",
  },

  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },

    alignItems: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
    },

    justifyContent: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
    },

    gap: {
      none: { gap: themeContract.space.none },
      xs: { gap: themeContract.space.xs },
      sm: { gap: themeContract.space.sm },
      md: { gap: themeContract.space.md },
      lg: { gap: themeContract.space.lg },
      xl: { gap: themeContract.space.xl },
      "2xl": { gap: themeContract.space["2xl"] },
      "3xl": { gap: themeContract.space["3xl"] },
    },

    wrap: {
      nowrap: { flexWrap: "nowrap" },
      wrap: { flexWrap: "wrap" },
    },
  },

  defaultVariants: {
    direction: "column",
    alignItems: "stretch",
    justifyContent: "start",
    gap: "md",
    wrap: "nowrap",
  },
});
