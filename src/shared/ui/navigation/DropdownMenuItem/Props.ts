import type { ReactNode } from 'react'

export type DropdownMenuItemProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  danger?: boolean
}
