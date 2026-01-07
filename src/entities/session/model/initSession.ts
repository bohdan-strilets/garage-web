import { getMe } from '../api/getMeApi'

import { sessionActions } from './sessionActions'

export const initSession = async () => {
  const data = await getMe()

  sessionActions.setSession({ user: data.user, accessToken: data.accessToken })
}
