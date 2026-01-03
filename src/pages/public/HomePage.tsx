import { useNavigate } from "@tanstack/react-router";

import { NAVIGATION_PATHS } from "@features/navigation/config/navigationPaths";
import { Button } from "@shared/ui/controls/Button";
import { ButtonGroup } from "@shared/ui/controls/ButtonGroup";
import { Box } from "@shared/ui/layout/Box";
import { Spacer } from "@shared/ui/layout/Spacer";
import { Stack } from "@shared/ui/layout/Stack";
import { Heading } from "@shared/ui/typography/Heading";
import { Text } from "@shared/ui/typography/Text";

export const HomePage = () => {
  const navigate = useNavigate();

  const toLogin = () => navigate({ to: NAVIGATION_PATHS.LOGIN });
  const toRegister = () => navigate({ to: NAVIGATION_PATHS.REGISTER });

  return (
    <>
      <Stack gap="xs">
        <Box padding="sm">
          <Heading as="h1" align="center">
            Your car Your history Full control
          </Heading>

          <Text size="sm" align="center">
            Garage helps you manage your vehicle systematically: expenses, maintenance, fuel, and
            key events — without paperwork or confusion.
          </Text>
        </Box>

        <Box padding="sm">
          <Heading as="h2" align="center">
            Create an account to:
          </Heading>

          <Text size="sm" align="center" tone="success">
            - avoid losing important data
            <br />
            - see real ownership costs
            <br />- access your full vehicle history anytime
          </Text>
        </Box>

        <Box padding="sm">
          <Text size="sm" align="center">
            Registration takes less than a minute. Value lasts for years.
          </Text>
        </Box>
      </Stack>

      <Spacer />

      <Box padding="sm">
        <ButtonGroup orientation="vertical">
          <Button fullWidth={true} onClick={toRegister}>
            Register
          </Button>
          <Button variant="secondary" fullWidth={true} onClick={toLogin}>
            Login
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
