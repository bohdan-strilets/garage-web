import { primaryNav } from '@features/navigation'
import Navigation from '@features/navigation/ui/Navigation'
import Logo from '@shared/ui/branding/Logo'
import Divider from '@shared/ui/layouts/Divider'
import Spacer from '@shared/ui/layouts/Spacer'
import Stack from '@shared/ui/layouts/Stack'
import Heading from '@shared/ui/typography/Heading'

import { useSidebar } from '../../model/useSidebar'
import SidebarToggle from '../SidebarToggle'

const AppSidebar = () => {
  const { toggle, isOpen } = useSidebar()

  return (
    <Stack align="start" gap="md">
      <Stack direction="row" align="center" gap="sm">
        <Logo />
        {isOpen && <Heading level={1}>Garage</Heading>}
      </Stack>
      <Divider />
      <SidebarToggle toggle={toggle} isOpen={isOpen} />
      <Spacer size="lg" />
      <Navigation items={primaryNav} />
    </Stack>
  )
}

export default AppSidebar
