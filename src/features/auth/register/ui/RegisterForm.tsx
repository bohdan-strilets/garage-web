import { Button } from "@shared/ui/controls/Button";
import { Input } from "@shared/ui/controls/Input";
import { PasswordInput } from "@shared/ui/controls/PasswordInput";
import { Form } from "@shared/ui/form/Form";
import { FormField } from "@shared/ui/form/FormField";
import { Stack } from "@shared/ui/layout/Stack";

import { useRegisterForm } from "../model/useRegisterForm";

export const RegisterForm = () => {
  const { form, onSubmit, isSubmitting } = useRegisterForm();

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Stack gap="md">
        <FormField name="firstName" label="First Name" required>
          <Input {...form.register("firstName")} />
        </FormField>

        <FormField name="lastName" label="Last Name" required>
          <Input {...form.register("lastName")} />
        </FormField>

        <FormField name="email" label="Email" required>
          <Input {...form.register("email")} />
        </FormField>

        <FormField name="password" label="Password" required>
          <PasswordInput {...form.register("password")} />
        </FormField>

        <FormField name="confirmPassword" label="Confirm Password" required>
          <PasswordInput {...form.register("confirmPassword")} />
        </FormField>

        <Button type="submit" loading={isSubmitting} fullWidth>
          Create account
        </Button>
      </Stack>
    </Form>
  );
};
