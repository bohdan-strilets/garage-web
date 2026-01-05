import { root } from './Main.css'

import type { MainProps } from './Props'

const Main = ({ children }: MainProps) => {
  return <main className={root}>{children}</main>
}

export default Main
