import { Button } from '../Button'
import { Icon } from '../Icon'

import { root } from './IconButton.css'

import type { IconButtonProps } from './Props'

const IconButton = ({ icon, variant, size, ...props }: IconButtonProps) => {
  return (
    <Button variant={variant} {...props} className={root({ size })}>
      <Icon name={icon} />
    </Button>
  )
}

export default IconButton
