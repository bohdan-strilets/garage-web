import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
  flex: 1,
  overflowY: "auto",
  paddingBlock: themeContract.space.md,

  "@media": {
    [mediaQueries.laptop]: {
      paddingBlock: themeContract.space.lg,
    },
  },
});
