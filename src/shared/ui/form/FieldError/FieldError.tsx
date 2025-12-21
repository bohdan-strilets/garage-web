import { Text } from "@shared/ui/typography/Text";

import type { FieldErrorProps } from "./types/FieldError";

export const FieldError = ({ children }: FieldErrorProps) => {
  return (
    <Text variant="caption" tone="danger" role="alert">
      {children}
    </Text>
  );
};
