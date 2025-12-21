import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});

export const root = recipe({
  base: {
    display: "inline-block",

    borderRadius: "50%",
    borderStyle: "solid",
    borderTopColor: "transparent",

    animation: `${spin} 0.8s linear infinite`,
  },

  variants: {
    size: {
      xs: {
        width: 12,
        height: 12,
        borderWidth: 2,
      },
      sm: {
        width: 16,
        height: 16,
        borderWidth: 2,
      },
      md: {
        width: 24,
        height: 24,
        borderWidth: 3,
      },
      lg: {
        width: 32,
        height: 32,
        borderWidth: 3,
      },
    },

    tone: {
      default: {
        borderColor: themeContract.color.text.secondary,
        borderTopColor: "transparent",
      },
      muted: {
        borderColor: themeContract.color.text.muted,
        borderTopColor: "transparent",
      },
      inverse: {
        borderColor: themeContract.color.text.inverted,
        borderTopColor: "transparent",
      },
      primary: {
        borderColor: themeContract.color.brand.primary,
        borderTopColor: "transparent",
      },
    },
  },

  defaultVariants: {
    size: "md",
    tone: "default",
  },
});
