import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

import Container from '@shared/ui/layouts/Container'

import { slideUp } from '../../shared/motion/presets/slideUp'
import { useTheme } from '../../shared/styles/model/useTheme'

export const Route = createFileRoute('/')({
  component: () => <App />,
})

const App = () => {
  const { toggleTheme } = useTheme()

  return (
    <Container>
      <motion.p {...slideUp()}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        doloremque rem perferendis unde! Totam voluptate fugiat explicabo vitae
        exercitationem corrupti asperiores eum beatae error aperiam, optio ut.
        Minus, quaerat facere.
      </motion.p>

      <button type="button" onClick={toggleTheme}>
        Change THEME
      </button>
    </Container>
  )
}
