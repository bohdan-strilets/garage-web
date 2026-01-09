import { useSidebar } from '@app/layouts/AppLayout'
import { media, useMediaQuery } from '@shared/lib/responsive'
import { SidebarToggle } from '@widgets/SidebarToggle'

const AppHeader = () => {
  const isLaptop = useMediaQuery(media.LAPTOP)
  const { toggle, isOpen } = useSidebar()

  return (
    <>
      {!isLaptop && <SidebarToggle toggle={toggle} isOpen={isOpen} />}
      HEADER
    </>
  )
}

export default AppHeader
