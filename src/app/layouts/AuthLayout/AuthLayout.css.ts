import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
  display: "flex",
  justifyContent: "center",

  minHeight: "100vh",

  background: themeContract.color.surface.canvas,
  overflowY: "auto",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "100%",
  maxWidth: 420,
  minHeight: "100vh",
  paddingBlock: themeContract.space.xl,
  paddingInline: themeContract.space.md,

  "@media": {
    [mediaQueries.tablet]: {
      paddingInline: themeContract.space.xl,
    },
  },
});

export const logo = style({
  display: "flex",
  justifyContent: "center",
});

export const card = style({
  padding: themeContract.space.md,
  marginBlock: "auto",

  borderRadius: themeContract.radius.md,
  background: themeContract.color.surface.base,
  boxShadow: themeContract.shadow.lg,

  "@media": {
    [mediaQueries.tablet]: {
      padding: themeContract.space.lg,
    },
  },
});

export const footer = style({
  display: "flex",
  justifyContent: "center",
});
