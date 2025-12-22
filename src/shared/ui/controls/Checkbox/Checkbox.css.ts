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
        cursor: "not-allowed",
        opacity: 0.6,
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

export const box = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: 20,
    height: 20,

    borderRadius: themeContract.radius.xs,
    border: `1px solid ${themeContract.color.border.subtle}`,
    backgroundColor: themeContract.color.surface.base,

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
        selectors: {
          [`${hiddenInput}:not(:checked) + &`]: {
            borderColor: themeContract.color.status.danger,
          },
        },
      },
    },
  },
});

export const checkIcon = style({
  width: 14,
  height: 14,

  color: themeContract.color.surface.base,

  opacity: 0,
  transform: "scale(0.6)",

  transition: `opacity ${themeContract.motion.fast} ease, transform ${themeContract.motion.fast} ease`,

  selectors: {
    [`${hiddenInput}:checked + ${box()} &`]: {
      opacity: 1,
      transform: "scale(1)",
    },

    [`${hiddenInput}:disabled + ${box()} &`]: {
      opacity: 0.4,
    },
  },
});
