import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = style({
  display: "inline-flex",
  alignItems: "end",

  cursor: "pointer",
});

export const image = recipe({
  base: {},

  variants: {
    size: {
      sm: { width: "40px" },
      md: { width: "80px" },
    },
  },

  defaultVariants: { size: "sm" },
});

export const text = recipe({
  base: {
    fontWeight: themeContract.font.weight.bold,
    color: themeContract.color.text.primary,
  },

  variants: {
    size: {
      sm: { fontSize: themeContract.font.size.lg },
      md: { fontSize: themeContract.font.size["2xl"] },
    },
  },

  defaultVariants: { size: "sm" },
});
