import { content, root } from './AppLayout.css'
import AppHeader from './ui/AppHeader'
import AppSidebar from './ui/AppSidebar'
import Header from './ui/Header'
import Main from './ui/Main'
import Sidebar from './ui/Sidebar'

import type { AppLayoutProps } from './Props'

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={root}>
      <Sidebar>
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

export default AppLayout
