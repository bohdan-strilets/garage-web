import type { SidebarState } from './SidebarState'

export type SidebarStore = {
  state: SidebarState
  open: () => void
  collapse: () => void
  toggle: () => void
}
