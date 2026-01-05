import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

import Box from '@shared/ui/layouts/Box'
import Container from '@shared/ui/layouts/Container'
import Grid from '@shared/ui/layouts/Grid'
import Stack from '@shared/ui/layouts/Stack'
import Surface from '@shared/ui/layouts/Surface'

import { slideUp } from '../../shared/motion/presets/slideUp'
import { useTheme } from '../../shared/styles/model/useTheme'

export const Route = createFileRoute('/')({
  component: () => <App />,
})

const App = () => {
  const { toggleTheme } = useTheme()

  return (
    <Container>
      <Box gap="xl" display="grid">
        <Surface tone="muted" padding="md" radius="md" shadow="md">
          <Stack gap="md">
            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>

            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>
          </Stack>
        </Surface>

        <Surface tone="muted" padding="md" radius="md" shadow="md">
          <Grid columns="50% 1fr" gap="lg">
            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>

            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>

            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>

            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>

            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>

            <motion.p {...slideUp()}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </motion.p>
          </Grid>
        </Surface>

        <Surface tone="muted" padding="md" radius="md" shadow="md">
          <button type="button" onClick={toggleTheme}>
            Change THEME
          </button>
        </Surface>
      </Box>
    </Container>
  )
}
