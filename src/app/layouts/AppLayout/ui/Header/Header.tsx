import Container from '@shared/ui/layouts/Container'

import { root } from './Header.css'

import type { HeaderProps } from './Props'

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={root}>
      <Container>{children}</Container>
    </header>
  )
}

export default Header
