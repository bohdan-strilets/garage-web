import type { ReactNode } from "react";

import type { FieldValues, UseFormReturn } from "react-hook-form";

export type FormProps<TFormValues extends FieldValues> = {
  form: UseFormReturn<TFormValues>;
  onSubmit: (values: TFormValues) => void | Promise<void>;
  children: ReactNode;
  noValidate?: boolean;
  className?: string;
};
