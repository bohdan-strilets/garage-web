import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
  width: "100%",
  maxWidth: themeContract.layout.container,
  marginInline: "auto",
  paddingInline: themeContract.space.md,

  "@media": {
    [mediaQueries.laptop]: {
      paddingInline: themeContract.space.lg,
    },
  },
});
