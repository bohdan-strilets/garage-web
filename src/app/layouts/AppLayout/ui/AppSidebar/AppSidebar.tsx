import { useSidebar } from '../../model/useSidebar'
import SidebarToggle from '../SidebarToggle'

const AppSidebar = () => {
  const { toggle, isOpen } = useSidebar()

  return (
    <>
      Bar
      <SidebarToggle toggle={toggle} isOpen={isOpen} />
    </>
  )
}

export default AppSidebar
