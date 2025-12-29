import type { Currency } from "@shared/enums/Currency";
import type { Locale } from "@shared/enums/Locale";
import type { Timezone } from "@shared/enums/Timezone";
import type { ThemeMode } from "@shared/styles/types/ThemeMode";

import type { UserNotificationsSettings } from "./UserNotificationsSettings";
import type { UserUnits } from "./UserUnits";

export type UserSettings = {
  units: UserUnits;
  locale: Locale;
  timezone: Timezone;
  theme: ThemeMode;
  currency: Currency;
  notifications: UserNotificationsSettings;
};
