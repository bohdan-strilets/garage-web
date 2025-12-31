import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "inline-flex",
    alignItems: "stretch",
  },

  variants: {
    orientation: {
      horizontal: { flexDirection: "row" },
      vertical: { flexDirection: "column" },
    },

    gap: {
      sm: { gap: themeContract.space.sm },
      md: { gap: themeContract.space.md },
      lg: { gap: themeContract.space.lg },
      xl: { gap: themeContract.space.xl },
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    gap: "sm",
  },
});
