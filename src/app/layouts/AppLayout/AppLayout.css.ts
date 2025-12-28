import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
  position: "relative",
  display: "flex",

  margin: "0 auto",
  maxWidth: themeContract.layout.container.desktop,
  minHeight: "100vh",
});

export const content = style({
  flex: 1,
  minWidth: 0,

  "@media": {
    [mediaQueries.tablet]: {
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,

      width: `calc(100% - ${themeContract.layout.sidebar.collapsed})`,
      overflowY: "auto",
    },

    [mediaQueries.laptop]: {
      position: "static",
      width: "100%",
    },
  },
});
