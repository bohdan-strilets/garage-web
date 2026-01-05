import { AnimatePresence } from 'motion/react'

import { useMediaQuery } from '@shared/lib/responsive'
import { media } from '@shared/styles'
import Overlay from '@shared/ui/overlays/Overlay'

import { useSidebar } from '../../model/useSidebar'

import { root } from './Sidebar.css'

import type { SidebarProps } from './Props'

const Sidebar = ({ children }: SidebarProps) => {
  const isLaptop = useMediaQuery(media.LAPTOP)
  const { state, isOpen, collapse } = useSidebar()

  return (
    <>
      <AnimatePresence>
        {!isLaptop && <Overlay open={isOpen} onClick={collapse} />}
      </AnimatePresence>

      <aside className={root({ state })}>{children}</aside>
    </>
  )
}

export default Sidebar
