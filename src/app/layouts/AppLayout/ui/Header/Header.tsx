import { root } from './Header.css'

import type { HeaderProps } from './Props'

const Header = ({ children }: HeaderProps) => {
  return <header className={root}>{children}</header>
}

export default Header
