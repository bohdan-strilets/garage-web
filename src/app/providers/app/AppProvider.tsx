import { QueryProvider } from '../reactQuery'
import { RouterProvider } from '../router'
import { ThemeProvider } from '../theme'

export const AppProvider = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryProvider>
  )
}
