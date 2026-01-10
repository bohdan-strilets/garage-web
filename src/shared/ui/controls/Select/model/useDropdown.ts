import { useEffect, useRef, useState } from 'react'

import type { SelectParams } from '../types/Params'

export const useDropdown = ({ disabled: isDisabled }: SelectParams) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const closeDropdown = () => setOpen(false)
  const toggleDropdown = () => {
    if (isDisabled) return
    setOpen(state => !state)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return {
    open,
    ref,
    closeDropdown,
    toggleDropdown,
  }
}
