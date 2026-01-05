import { SIDEBAR_VARIANT } from '../enums/sidebarVariant'

import { useSidebarStore } from './useSidebarStore'

export const useSidebar = () => {
  const state = useSidebarStore(state => state.state)
  const open = useSidebarStore(state => state.open)
  const collapse = useSidebarStore(state => state.collapse)
  const toggle = useSidebarStore(state => state.toggle)

  return {
    state,
    isOpen: state === SIDEBAR_VARIANT.OPEN,
    open,
    collapse,
    toggle,
  }
}
