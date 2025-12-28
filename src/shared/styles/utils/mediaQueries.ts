import { breakpoints } from "../tokens/breakpoints";

const { desktop, laptop, tablet } = breakpoints;

const mobileMax = tablet - 1;

export const mediaQueries = {
  mobile: `screen and (max-width: ${mobileMax}px)`,
  tablet: `screen and (min-width: ${tablet}px)`,
  laptop: `screen and (min-width: ${laptop}px)`,
  desktop: `screen and (min-width: ${desktop}px)`,
} as const;
