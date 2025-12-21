import { Text } from "../Text";

import type { CaptionProps } from "./types/CaptionProps";

export const Caption = ({ children }: CaptionProps) => {
  return <Text variant="caption">{children}</Text>;
};
