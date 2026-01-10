import { toast } from 'sonner'

export const notify = {
  success: (message: string) => {
    toast.success(message)
  },

  error: (message: string) => {
    toast.error(message)
  },

  info: (message: string) => {
    toast.message(message)
  },

  warning: (message: string) => {
    toast.warning(message)
  },
}
