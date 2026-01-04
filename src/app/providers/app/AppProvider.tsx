import { ThemeProvider } from '../theme'

import type { AppProviderProps } from './Props'

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
