import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import { paths } from '@shared/router'

import { logout } from '../lib/logout'

export const useLogout = () => {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate({ to: paths.AUTH.LOGIN, replace: true })
    },
  })

  return {
    logout: mutation.mutate,
    isPending: mutation.isPending,
  }
}
