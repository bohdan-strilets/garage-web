import type { InputHTMLAttributes } from "react";

import type { InputProps } from "../../Input/types/InputProps";

export type PasswordInputProps = Pick<InputProps, "size" | "className" | "disabled" | "hasError"> &
  InputHTMLAttributes<HTMLInputElement>;
