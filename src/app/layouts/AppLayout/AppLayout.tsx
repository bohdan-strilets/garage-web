import { AppHeader } from '@widgets/AppHeader'
import { AppSidebar } from '@widgets/AppSidebar'

import { content, root } from './AppLayout.css'
import { Header } from './ui/Header'
import { Main } from './ui/Main'
import { Sidebar } from './ui/Sidebar'

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
