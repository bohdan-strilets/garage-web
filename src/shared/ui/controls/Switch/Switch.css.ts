import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: themeContract.space.sm,

    cursor: "pointer",
    userSelect: "none",
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
  },
});

export const hiddenInput = style({
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0,
});

export const track = recipe({
  base: {
    position: "relative",

    minWidth: 40,
    height: 22,

    borderRadius: themeContract.radius.pill,
    backgroundColor: themeContract.color.surface.muted,
    border: `1px solid ${themeContract.color.border.subtle}`,

    transition: `background-color ${themeContract.motion.fast} ease, border-color ${themeContract.motion.fast} ease`,

    selectors: {
      [`${root()}:hover &`]: {
        borderColor: themeContract.color.border.strong,
      },

      [`${hiddenInput}:checked + &`]: {
        backgroundColor: themeContract.color.brand.primary,
        borderColor: themeContract.color.brand.primary,
      },

      [`${hiddenInput}:focus-visible + &`]: {
        outline: `2px solid ${themeContract.color.border.accent}`,
        outlineOffset: 2,
      },

      [`${hiddenInput}:disabled + &`]: {
        backgroundColor: themeContract.color.surface.muted,
        borderColor: themeContract.color.border.subtle,
      },
    },
  },

  variants: {
    hasError: {
      true: {
        borderColor: themeContract.color.status.danger,
      },
    },
  },
});

export const thumb = style({
  position: "absolute",
  top: 2,
  left: 2,

  width: 16,
  height: 16,

  borderRadius: themeContract.radius.pill,
  backgroundColor: themeContract.color.surface.base,

  transition: `transform ${themeContract.motion.fast} ease`,

  selectors: {
    [`${hiddenInput}:checked + ${track()} &`]: {
      transform: "translateX(18px)",
    },

    [`${hiddenInput}:disabled + ${track()} &`]: {
      backgroundColor: themeContract.color.surface.base,
    },
  },
});
