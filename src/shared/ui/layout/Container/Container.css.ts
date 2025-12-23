import { recipe } from "@vanilla-extract/recipes";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    width: "100%",
    maxWidth: themeContract.layout.container.desktop,
    marginInline: "auto",
    paddingInline: themeContract.space.md,

    "@media": {
      [mediaQueries.laptop]: {
        paddingInline: themeContract.space.lg,
      },
    },
  },

  variants: {
    fluid: {
      true: { maxWidth: "100%" },
    },
  },
});
