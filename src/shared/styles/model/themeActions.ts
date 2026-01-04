import { useThemeStore } from './useThemeStore'

export const themeActions = {
  setMode: useThemeStore.getState().setMode,
  setResolved: useThemeStore.getState().setResolvedTheme,
}
