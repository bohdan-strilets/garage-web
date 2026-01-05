import Container from '@shared/ui/layouts/Container'

import { root } from './Sidebar.css'

import type { SidebarProps } from './Props'

const Sidebar = ({ children, sidebarState }: SidebarProps) => {
  return (
    <aside className={root({ state: sidebarState })}>
      <Container>{children}</Container>
    </aside>
  )
}

export default Sidebar
