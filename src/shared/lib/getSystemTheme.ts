import { THEME } from '@shared/styles/enums/Theme'
import type { ResolvedTheme } from '@shared/styles/types/ResolvedTheme'

export const getSystemTheme = (): ResolvedTheme => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  return media.matches ? THEME.DARK : THEME.LIGHT
}
