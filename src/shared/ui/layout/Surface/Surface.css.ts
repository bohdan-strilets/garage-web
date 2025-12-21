import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    backgroundColor: themeContract.color.surface.base,
  },

  variants: {
    variant: {
      elevated: { boxShadow: themeContract.shadow.sm },
      filled: {},
      outlined: { border: `1px solid ${themeContract.color.border.subtle}` },
    },
  },

  defaultVariants: {
    variant: "elevated",
  },
});
