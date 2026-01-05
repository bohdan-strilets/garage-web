import type { Media } from '@shared/styles'
import { breakpoints } from '@shared/styles/tokens/breakpoints'

export const media: Media = {
  MOBILE: '',
  TABLET: `(min-width: ${breakpoints.TABLET}px)`,
  LAPTOP: `(min-width: ${breakpoints.LAPTOP}px)`,
  DESKTOP: `(min-width: ${breakpoints.DESKTOP}px)`,
}
