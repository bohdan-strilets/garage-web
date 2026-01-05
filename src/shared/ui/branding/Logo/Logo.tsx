import clsx from 'clsx'

import logoPrimary from '@shared/assets/logo/g-logo-primary.webp'

import { root, image } from './Logo.css'

import type { LogoProps } from './Props'

const Logo = ({ size, className }: LogoProps) => {
  return (
    <span className={clsx(root, className)}>
      <img
        src={logoPrimary}
        alt="Garage logo"
        className={image({ size })}
        draggable={false}
      />
    </span>
  )
}

export default Logo
