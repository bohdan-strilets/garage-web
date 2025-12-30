import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "inline-flex",
    alignItems: "stretch",
    gap: themeContract.space.sm,
  },

  variants: {
    orientation: {
      horizontal: { flexDirection: "row" },
      vertical: { flexDirection: "column" },
    },
  },

  defaultVariants: {
    orientation: "horizontal",
  },
});
