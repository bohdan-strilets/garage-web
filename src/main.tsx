import { createRoot } from 'react-dom/client'

import { StrictMode } from 'react'

import { AppProvider } from '@app/providers/app'

const root = document.getElementById('root') as HTMLDivElement

createRoot(root).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
