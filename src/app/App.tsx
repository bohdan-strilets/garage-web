import { FormProvider, useForm } from "react-hook-form";
import { TfiAndroid } from "react-icons/tfi";

import { useTheme } from "@shared/styles";
import { Button } from "@shared/ui/controls/Button";
import { Checkbox } from "@shared/ui/controls/Checkbox";
import { IconButton } from "@shared/ui/controls/IconButton";
import { Input } from "@shared/ui/controls/Input";
import { PasswordInput } from "@shared/ui/controls/PasswordInput";
import { Switch } from "@shared/ui/controls/Switch";
import { FormField } from "@shared/ui/form/FormField";
import { Box } from "@shared/ui/layout/Box";
import { Container } from "@shared/ui/layout/Container";
import { Divider } from "@shared/ui/layout/Divider";
import { Spacer } from "@shared/ui/layout/Spacer";
import { Stack } from "@shared/ui/layout/Stack";
import { Surface } from "@shared/ui/layout/Surface";
import { Heading } from "@shared/ui/typography/Heading";
import { Text } from "@shared/ui/typography/Text";

type FormValues = {
  email: string;
  password: string;
  terms: boolean;
  notifications: boolean;
};

const App = () => {
  const { toggle } = useTheme();

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      terms: false,
      notifications: true,
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

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
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                  <FormField
                    name="email"
                    label="Email"
                    description="We will never share your email"
                    required
                  >
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </FormField>

                  <FormField
                    name="password"
                    label="Password"
                    description="Minimum 8 characters"
                    required
                  >
                    <PasswordInput
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                  </FormField>

                  <FormField name="terms">
                    <Checkbox
                      label="I accept the terms and conditions"
                      {...register("terms", {
                        required: "You must accept the terms",
                      })}
                    />
                  </FormField>

                  <FormField name="notifications">
                    <Switch label="Enable notifications" {...register("notifications")} />
                  </FormField>

                  <Button type="submit">Create account</Button>
                </Stack>
              </form>
            </FormProvider>
          </Box>
        </Surface>
      </Stack>
    </Container>
  );
};

export default App;
