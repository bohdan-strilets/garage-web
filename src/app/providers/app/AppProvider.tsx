import { useEffect, useState } from 'react'

import { initSession } from '@entities/session'

import { QueryProvider } from '../react-query'
import { RouterProvider } from '../router'
import { ThemeProvider } from '../theme'
import { ToastProvider } from '../toast'

const AppProvider = () => {
  const [bootstrapped, setBootstrapped] = useState(false)

  useEffect(() => {
    initSession().finally(() => setBootstrapped(true))
  }, [])

  if (!bootstrapped) {
    return null
  }

  return (
    <QueryProvider>
      <ThemeProvider>
        <ToastProvider>
          <RouterProvider />
        </ToastProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}

export default AppProvider
