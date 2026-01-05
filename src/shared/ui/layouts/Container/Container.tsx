import clsx from 'clsx'

import { root } from './Container.css'

import type { ContainerProps } from './Props'

const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx(root, className)}>{children}</div>
}

export default Container
