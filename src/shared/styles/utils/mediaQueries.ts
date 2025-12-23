import { breakpoints } from "../tokens/breakpoints";

const { desktop, laptop, tablet } = breakpoints;

const mobileMax = tablet - 1;
const tabletMax = laptop - 1;
const laptopMax = desktop - 1;

export const mediaQueries = {
  mobile: `screen and (max-width: ${mobileMax}px)`,
  tablet: `screen and (min-width: ${tablet}px) and (max-width: ${tabletMax}px)`,
  laptop: `screen and (min-width: ${laptop}px) and (max-width: ${laptopMax}px)`,
  desktop: `screen and (min-width: ${desktop}px)`,
} as const;
