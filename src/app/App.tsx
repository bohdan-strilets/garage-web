import { TfiAndroid } from "react-icons/tfi";

import { useTheme } from "@shared/styles";
import { Button } from "@shared/ui/controls/Button";
import { Checkbox } from "@shared/ui/controls/Checkbox";
import { IconButton } from "@shared/ui/controls/IconButton";
import { Input } from "@shared/ui/controls/Input";
import { PasswordInput } from "@shared/ui/controls/PasswordInput";
import { Switch } from "@shared/ui/controls/Switch";
import { Box } from "@shared/ui/layout/Box";
import { Container } from "@shared/ui/layout/Container";
import { Divider } from "@shared/ui/layout/Divider";
import { Spacer } from "@shared/ui/layout/Spacer";
import { Stack } from "@shared/ui/layout/Stack";
import { Surface } from "@shared/ui/layout/Surface";
import { Caption } from "@shared/ui/typography/Caption";
import { Heading } from "@shared/ui/typography/Heading";
import { Label } from "@shared/ui/typography/Label";
import { Text } from "@shared/ui/typography/Text";

const App = () => {
  const { toggle } = useTheme();

  return (
    <Container>
      <Stack>
        <Surface>
          <Box padding="sm">
            <Heading as="h2">Hello</Heading>
            <Text size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam quae rem
              consequuntur expedita maxime quaerat ducimus sit. Illum vero quia, et debitis modi
              obcaecati laborum alias odio nobis doloremque.
            </Text>
          </Box>
        </Surface>

        <Surface>
          <Box padding="sm">
            <Heading as="h2">User name</Heading>
            <Text size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus
              similique maiores iusto voluptates aliquid magni, voluptate enim iste, mollitia iure,
              quas accusamus nesciunt laudantium quidem quos? Nobis, accusamus ea.
            </Text>
          </Box>
        </Surface>

        <Divider orientation="horizontal" tone="muted" size="sm" />

        <Surface>
          <Box padding="sm">
            <Heading as="h4">Change theme here</Heading>
            <Button onClick={toggle}>Toggle Theme</Button>
          </Box>
        </Surface>

        <Spacer size="xs" />

        <Surface variant="outlined">
          <Box padding="sm">
            <Stack justifyContent="center" direction="row" gap="sm">
              <IconButton ariaLabel="android-btn">
                <TfiAndroid />
              </IconButton>
              <IconButton ariaLabel="android-btn" variant="secondary">
                <TfiAndroid />
              </IconButton>
              <IconButton ariaLabel="android-btn" variant="ghost">
                <TfiAndroid />
              </IconButton>
            </Stack>
          </Box>
        </Surface>

        <Spacer size="xs" />

        <Surface>
          <Box padding="sm">
            <form>
              <Stack>
                <Stack gap="sm">
                  <Label required={true} htmlFor="firstName">
                    First name
                  </Label>
                  <Caption>What is your first name?</Caption>
                  <Input type="text" id="firstName" />
                </Stack>

                <Stack gap="sm">
                  <Label required={true} htmlFor="password">
                    Password
                  </Label>
                  <Caption>What is your password?</Caption>
                  <PasswordInput id="password" />
                </Stack>

                <Stack gap="sm">
                  <Checkbox id="terms" label="Accept terms and conditions" />
                </Stack>

                <Stack gap="sm">
                  <Switch id="switch" label="Switch me" />
                </Stack>
              </Stack>
            </form>
          </Box>
        </Surface>
      </Stack>
    </Container>
  );
};

export default App;
