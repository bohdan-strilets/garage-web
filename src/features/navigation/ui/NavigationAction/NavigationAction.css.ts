import { style } from "@vanilla-extract/css";

import { themeContract } from "@shared/styles";

export const item = style({
  height: 40,
});

export const link = style({
  display: "flex",
  alignItems: "center",

  paddingInline: themeContract.space.md,
  height: "100%",
  width: "100%",

  textAlign: "left",

  color: themeContract.color.text.primary,
  background: "transparent",
  border: "none",
  borderRadius: themeContract.radius.md,

  cursor: "pointer",

  selectors: {
    "&:hover": {
      background: themeContract.color.surface.muted,
      textDecoration: "none",
    },

    '[data-sidebar-open="false"] &': {
      justifyContent: "center",
      paddingInline: 0,
    },
  },
});

export const active = style({
  backgroundColor: themeContract.color.brand.primarySoft,
});

export const icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: themeContract.font.size.md,
});

export const label = style({
  width: "auto",
  paddingLeft: themeContract.space.md,

  whiteSpace: "nowrap",

  opacity: 1,
  overflow: "hidden",

  transition: `opacity ${themeContract.motion.medium} ease, width ${themeContract.motion.medium} ease`,

  selectors: {
    '[data-sidebar-open="false"] &': {
      opacity: 0,
      width: 0,
      paddingLeft: 0,
    },
  },
});
