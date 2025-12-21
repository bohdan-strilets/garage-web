import { Text } from "../Text";

import { required, root } from "./Label.css";

import type { LabelProps } from "./types/LabelProps";

export const Label = ({ children, required: isRequired, htmlFor, isInline }: LabelProps) => {
  return (
    <Text as="label" htmlFor={htmlFor} variant="label" className={root({ isInline })}>
      {children}
      {isRequired && <span className={required}>*</span>}
    </Text>
  );
};
