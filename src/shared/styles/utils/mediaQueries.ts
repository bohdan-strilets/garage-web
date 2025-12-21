import { breakpoints } from "../tokens/breakpoints";

export const mediaQueries = {
  mobile: `screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  laptop: `screen and (min-width: ${breakpoints.laptop}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
} as const;
