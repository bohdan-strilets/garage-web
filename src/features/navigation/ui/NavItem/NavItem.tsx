import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

import { useSidebar } from '@app/layouts/AppLayout'
import { focusable, hoverable, pressable } from '@shared/styles'
import Icon from '@shared/ui/controls/Icon'
import Paragraph from '@shared/ui/typography/Paragraph'

import { active, item, link } from './NavItem.css'

import type { NavItemProps } from './Props'

const NavItem = ({ item: itemNav }: NavItemProps) => {
  const { isOpen } = useSidebar()

  return (
    <li className={item}>
      <Link
        to={itemNav.to}
        className={clsx(link, hoverable, focusable, pressable)}
        activeProps={{ className: active }}
      >
        <Icon name={itemNav.icon} />
        {isOpen && <Paragraph size="sm">{itemNav.label}</Paragraph>}
      </Link>
    </li>
  )
}

export default NavItem
