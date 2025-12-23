import { breakpoints } from "./breakpoints";

export const layout = {
  container: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    laptop: `${breakpoints.laptop}px`,
    desktop: `${breakpoints.desktop}px`,
  },

  sidebar: {
    collapsed: "72px",
    expanded: "280px",
  },

  header: {
    height: "64px",
  },
} as const;
