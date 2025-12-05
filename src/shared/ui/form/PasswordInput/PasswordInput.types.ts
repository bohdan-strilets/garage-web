import type { InputProps } from '../Input';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export interface WrapperProps {
  $fullWidth?: boolean;
}
