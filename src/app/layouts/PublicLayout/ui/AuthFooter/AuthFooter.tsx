import { Text } from "@shared/ui/typography/Text";

export const AuthFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Text size="sm" weight="medium" tone="muted">
      Garage {currentYear} © All rights reserved.
    </Text>
  );
};
