import type { ReactElement, ReactNode } from "react";

export type FormControlProps = {
  id?: string;
  hasError?: boolean;
  disabled?: boolean;
};

export type FormFieldProps = {
  name: string;
  label?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  children: ReactElement<FormControlProps>;
};
