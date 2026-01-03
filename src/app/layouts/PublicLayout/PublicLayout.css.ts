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
  maxWidth: themeContract.layout.container.desktop,
  minHeight: "100vh",
  paddingBlock: themeContract.space.xl,
  paddingInline: themeContract.space.md,

  "@media": {
    [mediaQueries.tablet]: {
      paddingInline: themeContract.space.xl,
    },
  },
});
