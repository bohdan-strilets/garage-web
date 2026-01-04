import { RouterProvider } from '../router'
import { ThemeProvider } from '../theme'

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  )
}
