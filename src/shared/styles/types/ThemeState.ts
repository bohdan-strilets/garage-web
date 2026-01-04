import type { ResolvedTheme } from './ResolvedTheme'
import type { ThemeMode } from './ThemeMode'

export type ThemeState = {
  mode: ThemeMode
  resolvedTheme: ResolvedTheme

  setMode: (mode: ThemeMode) => void
  setResolvedTheme: (theme: ResolvedTheme) => void
}
