import { Toaster } from 'sonner'

import type { ToastProviderProps } from './Props'

const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      {children}
    </>
  )
}

export default ToastProvider
