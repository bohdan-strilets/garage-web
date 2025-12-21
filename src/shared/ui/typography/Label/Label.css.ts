import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  variants: {
    isInline: { true: { display: "inline-flex" }, false: {} },
  },

  defaultVariants: {
    isInline: false,
  },
});

export const required = style({
  color: themeContract.color.status.danger,
  marginLeft: themeContract.space.xs,
});
