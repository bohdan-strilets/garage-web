import type { InputHTMLAttributes } from "react";

export type SwitchProps = {
  label?: string;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
