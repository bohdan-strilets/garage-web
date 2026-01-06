import Button from '@shared/ui/controls/Button'
import Icon from '@shared/ui/controls/Icon'

import type { SidebarToggleProps } from './Props'

const SidebarToggle = ({ toggle, isOpen }: SidebarToggleProps) => {
  return (
    <Button
      onClick={toggle}
      size="sm"
      variant="ghost"
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      <Icon name={isOpen ? 'sidebarClose' : 'sidebarOpen'} />
    </Button>
  )
}

export default SidebarToggle
