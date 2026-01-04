/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useLayoutEffect, useRef } from 'react'

import { getSystemTheme } from '@shared/lib/getSystemTheme'
import { applyTheme, THEME, themeActions, useTheme } from '@shared/styles'
import { DISABLE_THEME_TRANSITION_CLASS } from '@shared/styles/themeTransition.css'

import type { ThemeProviderProps } from './Props'

import '@shared/styles/reset.css'
import '@shared/styles/globals.css'
import '@shared/styles/themeTransition.css'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { mode } = useTheme()
  const isMounted = useRef(false)

  useLayoutEffect(() => {
    document.body.classList.add(DISABLE_THEME_TRANSITION_CLASS)

    const systemTheme = getSystemTheme()
    const nextTheme = mode === THEME.SYSTEM ? systemTheme : mode

    applyTheme(nextTheme)
    themeActions.setResolved(nextTheme)

    requestAnimationFrame(() => {
      document.body.classList.remove(DISABLE_THEME_TRANSITION_CLASS)
      isMounted.current = true
    })
  }, [])

  useEffect(() => {
    if (!isMounted.current) return

    const nextTheme = mode === THEME.SYSTEM ? getSystemTheme() : mode

    applyTheme(nextTheme, true)
    themeActions.setResolved(nextTheme)
  }, [mode])

  useEffect(() => {
    if (mode !== THEME.SYSTEM) return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = () => {
      const systemTheme = getSystemTheme()
      applyTheme(systemTheme, true)
      themeActions.setResolved(systemTheme)
    }

    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [mode])

  return <>{children}</>
}
