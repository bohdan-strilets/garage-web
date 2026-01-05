import { createFileRoute } from '@tanstack/react-router'

import Button from '@shared/ui/controls/Button'
import Box from '@shared/ui/layouts/Box'
import Container from '@shared/ui/layouts/Container'
import Divider from '@shared/ui/layouts/Divider'
import Grid from '@shared/ui/layouts/Grid'
import Spacer from '@shared/ui/layouts/Spacer'
import Stack from '@shared/ui/layouts/Stack'
import Surface from '@shared/ui/layouts/Surface'
import Heading from '@shared/ui/typography/Heading'
import Paragraph from '@shared/ui/typography/Paragraph'

import { useTheme } from '../../shared/styles/model/useTheme'

export const Route = createFileRoute('/')({
  component: () => <App />,
})

const App = () => {
  const { toggleTheme } = useTheme()

  return (
    <Container>
      <Box gap="xl" display="grid">
        <Heading level={1}>Lorem ipsum dolor sit amet</Heading>
        <Spacer />

        <Surface tone="muted" padding="md" radius="md" shadow="md">
          <Stack gap="md">
            <Heading level={2}>Lorem ipsum dolor sit amet</Heading>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>

            <Divider />

            <Heading level={2}>Lorem ipsum dolor sit amet</Heading>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>
          </Stack>
        </Surface>

        <Surface tone="muted" padding="md" radius="md" shadow="md">
          <Grid columns="50% 1fr" gap="lg">
            <Paragraph size="sm" tone="muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>

            <Paragraph size="sm" tone="muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>

            <Paragraph size="sm" tone="muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>

            <Paragraph size="sm" tone="muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>

            <Paragraph size="sm" tone="muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>

            <Paragraph size="sm" tone="muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              doloremque rem perferendis unde! Totam voluptate fugiat explicabo
              vitae exercitationem corrupti asperiores eum beatae error aperiam,
              optio ut. Minus, quaerat facere.
            </Paragraph>
          </Grid>
        </Surface>

        <Surface tone="muted" padding="md" radius="md" shadow="md">
          <Stack align="start" gap="md">
            <Heading level={3}>Theme settings</Heading>

            <Button onClick={toggleTheme}>Change THEME</Button>
          </Stack>
        </Surface>
      </Box>
    </Container>
  )
}
