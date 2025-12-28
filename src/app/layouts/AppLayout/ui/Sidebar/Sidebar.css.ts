import { style } from "@vanilla-extract/css";

import { mediaQueries, themeContract } from "@shared/styles";

export const root = style({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: themeContract.zIndex.drawer,

  display: "flex",
  flexDirection: "column",

  width: themeContract.layout.sidebar.expanded,

  background: themeContract.color.surface.base,
  borderRight: `1px solid ${themeContract.color.border.subtle}`,
  height: "100vh",

  transform: "translateX(-100%)",
  transition: `transform ${themeContract.motion.medium} ease`,

  selectors: {
    '[data-sidebar-open="true"] &': {
      transform: "translateX(0)",
    },
  },

  "@media": {
    [mediaQueries.tablet]: {
      width: themeContract.layout.sidebar.collapsed,

      transform: "none",
      transition: `width ${themeContract.motion.medium} ease`,

      selectors: {
        '[data-sidebar-open="true"] &': {
          width: themeContract.layout.sidebar.expanded,
        },
      },
    },

    [mediaQueries.laptop]: {
      position: "sticky",
      top: 0,
    },
  },
});
