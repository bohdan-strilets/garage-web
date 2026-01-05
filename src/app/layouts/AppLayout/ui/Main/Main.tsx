import Container from '@shared/ui/layouts/Container'

import { root } from './Main.css'

import type { MainProps } from './Props'

const Main = ({ children }: MainProps) => {
  return (
    <main className={root}>
      <Container>{children}</Container>
    </main>
  )
}

export default Main
