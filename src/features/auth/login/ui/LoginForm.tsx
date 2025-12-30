import { Button } from "@shared/ui/controls/Button";
import { Input } from "@shared/ui/controls/Input";
import { PasswordInput } from "@shared/ui/controls/PasswordInput";
import { Form } from "@shared/ui/form/Form";
import { FormField } from "@shared/ui/form/FormField";
import { Stack } from "@shared/ui/layout/Stack";

import { useLoginForm } from "../model/useLoginForm";

export const LoginForm = () => {
  const { form, onSubmit, isSubmitting } = useLoginForm();

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Stack gap="md">
        <FormField name="email" label="Email" required>
          <Input {...form.register("email")} />
        </FormField>

        <FormField name="password" label="Password" required>
          <PasswordInput {...form.register("password")} />
        </FormField>

        <Button type="submit" loading={isSubmitting} fullWidth>
          Create account
        </Button>
      </Stack>
    </Form>
  );
};
