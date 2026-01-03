import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
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
