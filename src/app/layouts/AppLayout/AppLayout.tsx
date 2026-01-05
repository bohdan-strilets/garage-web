import { content, root } from './AppLayout.css'
import { useSidebar } from './model/useSidebar'
import AppHeader from './ui/AppHeader'
import AppSidebar from './ui/AppSidebar'
import Header from './ui/Header'
import Main from './ui/Main'
import Sidebar from './ui/Sidebar'

import type { AppLayoutProps } from './Props'

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { state } = useSidebar()

  return (
    <div className={root}>
      <Sidebar sidebarState={state}>
        <AppSidebar />
      </Sidebar>

      <div className={content}>
        <Header>
          <AppHeader />
        </Header>

        <Main>{children}</Main>
      </div>
    </div>
  )
}
