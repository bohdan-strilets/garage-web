import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    fontFamily: themeContract.font.family.base,
    fontWeight: themeContract.font.weight.bold,

    color: themeContract.color.text.secondary,
    margin: 0,
  },

  variants: {
    as: {
      h1: { fontSize: themeContract.font.size.xl },
      h2: { fontSize: themeContract.font.size.lg },
      h3: { fontSize: themeContract.font.size.md },
      h4: { fontSize: themeContract.font.size.sm },
      h5: { fontSize: themeContract.font.size.xs },
    },

    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
  },

  defaultVariants: {
    as: "h1",
    align: "left",
  },
});
