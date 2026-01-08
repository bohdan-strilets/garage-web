import { Logo } from '@shared/ui/branding/Logo'
import { Button } from '@shared/ui/controls/Button'
import { Paragraph } from '@shared/ui/typography/Paragraph'

import { content, header, root } from './AuthLayout.css'

import type { AuthLayoutProps } from './Props'

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={root}>
      <header className={header}>
        <Logo />
        <Button>Theme toggle</Button>
      </header>

      <main>
        <section className={content}>{children}</section>
      </main>

      <footer>
        <Paragraph size="sm" color="muted">
          &copy; {currentYear} Garage
        </Paragraph>
      </footer>
    </div>
  )
}

export default AuthLayout
