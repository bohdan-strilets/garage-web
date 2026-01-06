import { useState } from 'react'

import Checkbox from '@shared/ui/form/Checkbox'
import PasswordInput from '@shared/ui/form/PasswordInput'
import Select from '@shared/ui/form/Select'
import TextInput from '@shared/ui/form/TextInput'
import Divider from '@shared/ui/layouts/Divider'
import Stack from '@shared/ui/layouts/Stack'
import Surface from '@shared/ui/layouts/Surface'
import Heading from '@shared/ui/typography/Heading'
import Paragraph from '@shared/ui/typography/Paragraph'

const DashboardPage = () => {
  const [value, setValue] = useState<string | undefined>()

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

        <TextInput placeholder="Last name" />

        <PasswordInput placeholder="Password" />

        <PasswordInput placeholder="Confirm password" />

        <Checkbox label="Accept terms and conditions" />

        <Divider />

        <Checkbox label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum voluptate, odit dicta nihil illum exercitationem aperiam voluptas dolores optio reprehenderit blanditiis accusamus id odio sapiente. Accusantium possimus dolores ratione tempora quia at odio nobis velit voluptas necessitatibus!" />

        <Select
          value={value}
          onChange={setValue}
          placeholder="Select option"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
            { value: 'option4', label: 'Option 4' },
          ]}
        />
      </Stack>
    </Surface>
  )
}

export default DashboardPage
