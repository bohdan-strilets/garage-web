import { queryClient } from '@shared/lib/react-query'

import { logoutRequest } from '../api/logoutApi'
import { sessionActions } from '../model/sessionActions'

export const logout = async () => {
  try {
    await logoutRequest()
  } finally {
    sessionActions.clearSession()
    queryClient.clear()
  }
}
