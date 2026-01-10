import { useSidebar } from '@app/layouts/AppLayout'
import { media, useMediaQuery } from '@shared/lib/responsive'
import { Box } from '@shared/ui/layouts/Box'
import { SidebarToggle } from '@widgets/SidebarToggle'
import { UserMenu } from '@widgets/UserMenu'

import { root } from './AppHeader.css'

const AppHeader = () => {
  const isLaptop = useMediaQuery(media.LAPTOP)
  const { toggle, isOpen } = useSidebar()

  return (
    <Box className={root}>
      {!isLaptop && <SidebarToggle toggle={toggle} isOpen={isOpen} />}

      <UserMenu
        name="John Doe"
        onProfile={function (): void {
          throw new Error('Function not implemented.')
        }}
        onSettings={function (): void {
          throw new Error('Function not implemented.')
        }}
        onLogout={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </Box>
  )
}

export default AppHeader
