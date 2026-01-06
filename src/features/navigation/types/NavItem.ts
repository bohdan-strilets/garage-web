import type { StaticPath } from '@shared/router'
import type { IconName } from '@shared/ui/controls/Icon/types/IconName'

export interface NavItem {
  key: string
  label: string
  to: StaticPath
  icon: IconName
}
