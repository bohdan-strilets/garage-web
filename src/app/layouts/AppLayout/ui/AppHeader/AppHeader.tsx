import { useMediaQuery } from '@shared/lib/responsive'
import { media } from '@shared/styles'

import { useSidebar } from '../../model/useSidebar'
import SidebarToggle from '../SidebarToggle'

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
