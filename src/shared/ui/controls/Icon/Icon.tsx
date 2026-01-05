import clsx from 'clsx'

import { root } from './Icon.css'
import { icons } from './icons'

import type { IconProps } from './types/Props'

const Icon = ({ name, size, color, className, ...props }: IconProps) => {
  const SvgIcon = icons[name]

  return (
    <SvgIcon
      aria-hidden="true"
      focusable="false"
      className={clsx(root({ size, color }), className)}
      {...props}
    />
  )
}

export default Icon
