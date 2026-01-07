import type { Currency, Locale, Timezone } from '@shared/enums/locale'
import type { ThemeMode } from '@shared/styles/types/ThemeMode'

import type { UserNotifications } from './UserNotifications'
import type { UserUnits } from './UserUnits'

export type UserSettings = {
  units: UserUnits
  locale: Locale
  timezone: Timezone
  theme: ThemeMode
  currency: Currency
  notifications: UserNotifications
}
