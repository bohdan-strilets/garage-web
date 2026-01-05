import type { SIDEBAR_VARIANT } from '../enums/sidebarVariant'

export type SidebarState =
  (typeof SIDEBAR_VARIANT)[keyof typeof SIDEBAR_VARIANT]
