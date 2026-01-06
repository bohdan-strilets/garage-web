import NavItem from '../NavItem'

import { list, root } from './Navigation.css'

import type { NavigationPoprs } from './Props'

const Navigation = ({ items }: NavigationPoprs) => {
  return (
    <nav className={root} aria-label="Primary navigation">
      <ul className={list}>
        {items.map(item => {
          return <NavItem key={item.key} item={item} />
        })}
      </ul>
    </nav>
  )
}

export default Navigation
