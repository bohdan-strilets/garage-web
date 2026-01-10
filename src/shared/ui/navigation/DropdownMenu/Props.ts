import type { ReactNode } from 'react'

export type DropdownMenuRenderProps = {
  close: () => void
}

export type DropdownMenuProps = {
  trigger: ReactNode
  children: ReactNode | ((props: DropdownMenuRenderProps) => ReactNode)
  className?: string
  disabled?: boolean
}
