import { useSidebar } from '@app/layouts/AppLayout'
import { useLogout } from '@entities/session'
import { media, useMediaQuery } from '@shared/lib/responsive'
import { Box } from '@shared/ui/layouts/Box'
import { Stack } from '@shared/ui/layouts/Stack'
import { SidebarToggle } from '@widgets/SidebarToggle'
import { ThemeToggle } from '@widgets/ThemeToggle'
import { UserMenu } from '@widgets/UserMenu'

import { root } from './AppHeader.css'

const AppHeader = () => {
  const isLaptop = useMediaQuery(media.LAPTOP)
  const { toggle, isOpen } = useSidebar()
  const { logout, isPending } = useLogout()

  const onProfile = () => {
    console.log('Go to profile')
  }

  const onSettings = () => {
    console.log('Go to settings')
  }

  return (
    <Box className={root}>
      {!isLaptop && <SidebarToggle toggle={toggle} isOpen={isOpen} />}

      <Stack direction="row" align="center" gap="lg">
        <ThemeToggle />
        <UserMenu
          name="John Doe"
          onProfile={onProfile}
          onSettings={onSettings}
          onLogout={logout}
          isLoading={isPending}
        />
      </Stack>
    </Box>
  )
}

export default AppHeader
