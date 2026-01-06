import { primaryNav } from '@features/navigation'
import Navigation from '@features/navigation/ui/Navigation'
import Logo from '@shared/ui/branding/Logo'

import { useSidebar } from '../../model/useSidebar'
import SidebarToggle from '../SidebarToggle'

const AppSidebar = () => {
  const { toggle, isOpen } = useSidebar()

  return (
    <>
      <Logo />
      Bar
      <SidebarToggle toggle={toggle} isOpen={isOpen} />
      <Navigation items={primaryNav} />
    </>
  )
}

export default AppSidebar
