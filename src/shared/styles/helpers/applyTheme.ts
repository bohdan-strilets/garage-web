import {
  DISABLE_THEME_TRANSITION_CLASS,
  THEME_TRANSITION_CLASS,
  THEME_TRANSITION_DURATION_MS,
} from '@app/theme/themeTransition.css'

import { THEME } from '../enums/Theme'
import { darkTheme } from '../theme/dark.css'
import { lightTheme } from '../theme/light.css'

import type { ResolvedTheme } from '../types/ResolvedTheme'

let themeTimeout: number | null = null

export const applyTheme = (theme: ResolvedTheme, animated = false) => {
  const isDark = theme === THEME.DARK
  const nextTheme = isDark ? darkTheme : lightTheme

  if (themeTimeout) {
    clearTimeout(themeTimeout)
    themeTimeout = null
  }

  if (!animated) {
    document.body.classList.remove(
      lightTheme,
      darkTheme,
      THEME_TRANSITION_CLASS,
      DISABLE_THEME_TRANSITION_CLASS,
    )
    document.body.classList.add(nextTheme)
    return
  }

  document.body.classList.add(THEME_TRANSITION_CLASS)

  themeTimeout = window.setTimeout(() => {
    document.body.classList.remove(lightTheme, darkTheme)
    document.body.classList.add(nextTheme)

    requestAnimationFrame(() => {
      document.body.classList.remove(THEME_TRANSITION_CLASS)
    })

    themeTimeout = null
  }, THEME_TRANSITION_DURATION_MS)
}
