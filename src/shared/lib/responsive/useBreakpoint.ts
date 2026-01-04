import { useEffect, useState } from 'react'

import type { Breakpoint } from '@shared/styles/types/Breakpoint'

export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const query = `(min-width: ${breakpoint})`

  const getMatches = () =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false

  const [matches, setMatches] = useState<boolean>(getMatches)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
