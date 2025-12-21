import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    backgroundColor: themeContract.color.border.default,
    flexShrink: 0,
  },

  variants: {
    orientation: {
      horizontal: { width: "100%", height: "1px" },
      vertical: { height: "100%", width: "1px" },
    },

    size: {
      xs: { marginBlock: themeContract.space.xs, marginInline: 0 },
      sm: { marginBlock: themeContract.space.sm, marginInline: 0 },
      md: { marginBlock: themeContract.space.md, marginInline: 0 },
      lg: { marginBlock: themeContract.space.lg, marginInline: 0 },
      xl: { marginBlock: themeContract.space.xl, marginInline: 0 },
    },

    tone: {
      default: { backgroundColor: themeContract.color.border.default },
      muted: { backgroundColor: themeContract.color.border.subtle },
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    size: "sm",
    tone: "default",
  },
});
