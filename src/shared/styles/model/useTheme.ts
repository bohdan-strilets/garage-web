import { THEME } from '../enums/Theme'

import { useThemeStore } from './useThemeStore'

export const useTheme = () => {
  const mode = useThemeStore(state => state.mode)
  const resolvedTheme = useThemeStore(state => state.resolvedTheme)
  const setMode = useThemeStore(state => state.setMode)

  const setLight = () => setMode(THEME.LIGHT)
  const setDark = () => setMode(THEME.DARK)
  const setSystem = () => setMode(THEME.SYSTEM)

  const toggleTheme = () => {
    if (resolvedTheme === THEME.DARK) {
      setMode(THEME.LIGHT)
    } else {
      setMode(THEME.DARK)
    }
  }

  return { mode, resolvedTheme, setLight, setDark, setSystem, toggleTheme }
}
