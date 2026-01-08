import { Checkbox } from '@shared/ui/form/Checkbox'
import { PasswordInput } from '@shared/ui/form/PasswordInput'
import { TextInput } from '@shared/ui/form/TextInput'
import { Divider } from '@shared/ui/layouts/Divider'
import { Stack } from '@shared/ui/layouts/Stack'
import { Surface } from '@shared/ui/layouts/Surface'
import { ErrorMessage } from '@shared/ui/typography/ErrorMessage'
import { Heading } from '@shared/ui/typography/Heading'
import { Label } from '@shared/ui/typography/Label'

const LoginPage = () => {
  return (
    <Surface radius="lg">
      <Stack gap="md">
        <Heading level={1}>Login</Heading>
        <Label htmlFor="firstName" isRequired>
          Set your name
        </Label>
        <TextInput id="firstName" placeholder="First name" />
        <ErrorMessage>First name is required</ErrorMessage>
        <TextInput placeholder="Last name" />
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Confirm password" />
        <Checkbox label="Accept terms and conditions" />
        <Divider />
        <Checkbox label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum voluptate, odit dicta nihil illum exercitationem aperiam voluptas dolores optio reprehenderit blanditiis accusamus id odio sapiente. Accusantium possimus dolores ratione tempora quia at odio nobis velit voluptas necessitatibus!" />
      </Stack>
    </Surface>
  )
}

export default LoginPage
