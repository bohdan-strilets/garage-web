import { useEffect, useState } from 'react'

import type { MediaQuery } from '@shared/styles'

export const useMediaQuery = (mediaQuery: MediaQuery): boolean => {
  const getMatches = () =>
    typeof window !== 'undefined'
      ? window.matchMedia(mediaQuery).matches
      : false

  const [matches, setMatches] = useState<boolean>(getMatches)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(mediaQuery)
    const listener = () => setMatches(media.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [mediaQuery])

  return matches
}
