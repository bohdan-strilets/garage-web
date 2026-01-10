import { Logo } from '@shared/ui/branding/Logo'
import { Paragraph } from '@shared/ui/typography/Paragraph'
import { ThemeToggle } from '@widgets/ThemeToggle'

import { content, header, main, root } from './AuthLayout.css'

import type { AuthLayoutProps } from './Props'

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={root}>
      <header className={header}>
        <Logo />
        <ThemeToggle />
      </header>

      <main className={main}>
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
