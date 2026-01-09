import { useTheme } from '@shared/styles'
import { Icon } from '@shared/ui/controls/Icon'

import { thumb, toggle } from './ThemeToggle.css'

const ThemeToggle = () => {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={toggle}
      aria-label="Toggle theme"
      data-dark={isDark}
    >
      <span className={thumb({ isActive: isDark })}>
        {isDark ? <Icon name="moon" /> : <Icon name="sun" />}
      </span>
    </button>
  )
}

export default ThemeToggle
