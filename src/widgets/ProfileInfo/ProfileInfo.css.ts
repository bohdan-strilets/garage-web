import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
  display: "inline-flex",
  alignItems: "center",

  height: 40,
  paddingInline: 8,

  border: "none",
  borderRadius: themeContract.radius.sm,
  background: "transparent",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: themeContract.color.surface.muted,
    },

    "&:focus-visible": {
      outline: `2px solid ${themeContract.color.border.accent}`,
      outlineOffset: 2,
    },
  },
});

export const name = style({
  display: "none",

  maxWidth: 120,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media": {
    [mediaQueries.tablet]: {
      display: "block",
    },
  },
});
