import type { InputHTMLAttributes } from "react";

export type CheckboxProps = {
  label?: string;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
