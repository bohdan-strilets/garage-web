import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    position: "fixed",
    inset: 0,

    background: themeContract.color.overlay.backdrop,
    zIndex: themeContract.zIndex.overlay,

    opacity: 0,
    pointerEvents: "none",
    transition: `opacity ${themeContract.motion.medium} ease`,
  },

  variants: {
    isActive: {
      true: {
        opacity: 1,
        pointerEvents: "auto",
      },
    },
  },
});
