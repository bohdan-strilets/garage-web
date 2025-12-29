import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    fontFamily: themeContract.font.family.heading,
    fontWeight: themeContract.font.weight.normal,

    color: themeContract.color.text.secondary,
    margin: 0,
  },

  variants: {
    as: {
      h1: { fontSize: themeContract.font.size["2xl"] },
      h2: { fontSize: themeContract.font.size.xl },
      h3: { fontSize: themeContract.font.size.lg },
      h4: { fontSize: themeContract.font.size.md },
      h5: { fontSize: themeContract.font.size.sm },
      h6: { fontSize: themeContract.font.size.xs },
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
