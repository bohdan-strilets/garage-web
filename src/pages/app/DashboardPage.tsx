import PasswordInput from '@shared/ui/form/PasswordInput'
import TextInput from '@shared/ui/form/TextInput'
import Stack from '@shared/ui/layouts/Stack'
import Surface from '@shared/ui/layouts/Surface'
import Heading from '@shared/ui/typography/Heading'
import Paragraph from '@shared/ui/typography/Paragraph'

const DashboardPage = () => {
  return (
    <Surface padding="xl" radius="lg" shadow="md">
      <Stack gap="md">
        <Heading level={1}>Dashboard</Heading>

        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          dolorum voluptate, odit dicta nihil illum exercitationem aperiam
          voluptas dolores optio reprehenderit blanditiis accusamus id odio
          sapiente. Accusantium possimus dolores ratione tempora quia at odio
          nobis velit voluptas necessitatibus! Accusantium maxime temporibus,
          optio maiores culpa quaerat. Autem a, explicabo ex totam earum sed
          molestiae, beatae numquam recusandae libero quaerat inventore
          possimus. Rerum ex laborum incidunt molestiae quam nesciunt? Molestiae
          reprehenderit nam veritatis sed quis explicabo voluptatem fuga
          sapiente. Autem mollitia cum expedita dolorem. Illum obcaecati atque
          nam at laudantium necessitatibus accusamus. Doloremque asperiores
          cumque nesciunt id eaque omnis corrupti quae. Sequi.
        </Paragraph>

        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          officia itaque dignissimos excepturi quo sed blanditiis corporis ea
          laborum repudiandae tenetur modi vel, doloremque, velit omnis minima
          nostrum ut sunt!
        </Paragraph>
      </Stack>

      <Stack gap="md">
        <TextInput placeholder="First name" />
        <PasswordInput placeholder="Password" />
      </Stack>
    </Surface>
  )
}

export default DashboardPage
