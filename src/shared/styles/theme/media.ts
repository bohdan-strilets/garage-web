import { breakpoints } from '../tokens/breakpoints'

import type { Media } from '../types/Media'

export const media: Media = {
  MOBILE: '',
  TABLET: `(min-width: ${breakpoints.TABLET}px)`,
  LAPTOP: `(min-width: ${breakpoints.LAPTOP}px)`,
  DESKTOP: `(min-width: ${breakpoints.DESKTOP}px)`,
}
