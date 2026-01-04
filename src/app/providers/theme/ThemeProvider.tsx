import { useEffect } from 'react'

import { darkTheme } from '@shared/styles/theme'

import type { ThemeProviderProps } from './Props'

import '@shared/styles/reset.css'
import '@shared/styles/globals.css'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useEffect(() => {
    document.body.classList.add(darkTheme)

    return () => {
      document.body.classList.remove(darkTheme)
    }
  }, [])

  return <>{children}</>
}
