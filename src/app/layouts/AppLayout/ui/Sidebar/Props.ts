import type { ReactNode } from 'react'

import type { SidebarState } from '../../types/SidebarState'

export type SidebarProps = {
  children: ReactNode
  sidebarState: SidebarState
}
