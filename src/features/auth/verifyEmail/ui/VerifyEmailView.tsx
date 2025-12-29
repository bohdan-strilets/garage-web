import { useSessionStore } from "@entities/session";
import { Button } from "@shared/ui/controls/Button";
import { Stack } from "@shared/ui/layout/Stack";
import { Heading } from "@shared/ui/typography/Heading";
import { Text } from "@shared/ui/typography/Text";

import { useVerifyEmail } from "../model/useVerifyEmail";

export const VerifyEmailView = () => {
  const { resend, isResending } = useVerifyEmail();
  const { user } = useSessionStore();

  return (
    <Stack gap="lg" alignItems="center">
      <Heading as="h1">Confirm your email</Heading>

      <Text align="center">
        We’ve sent a verification link to:
        <br />
        <strong>{user?.email}</strong>
      </Text>
      <Text align="center">
        Please check your inbox and follow the link to activate your account.
      </Text>

      <Stack gap="xs" alignItems="center">
        <Text tone="muted">Didn’t receive the email?</Text>
        <Text tone="muted">- Check your spam or junk folder</Text>
        <Text tone="muted">- Make sure your inbox is not full</Text>
        <Text tone="muted">- Wait a couple of minutes</Text>
      </Stack>

      <Button onClick={resend} loading={isResending} variant="secondary">
        Resend email
      </Button>
    </Stack>
  );
};
