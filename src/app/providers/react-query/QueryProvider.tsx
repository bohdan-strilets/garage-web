import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@shared/lib/react-query'

import type { QueryProviderProps } from './Props'

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
