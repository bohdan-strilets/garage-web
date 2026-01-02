import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    backgroundColor: themeContract.color.surface.muted,
    color: themeContract.color.text.secondary,

    overflow: "hidden",
    userSelect: "none",
    flexShrink: 0,
  },

  variants: {
    size: {
      xs: { width: 24, height: 24, fontSize: 12 },
      sm: { width: 32, height: 32, fontSize: 14 },
      md: { width: 40, height: 40, fontSize: 16 },
      lg: { width: 48, height: 48, fontSize: 18 },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const fallback = style({
  fontWeight: themeContract.font.weight.medium,
});
