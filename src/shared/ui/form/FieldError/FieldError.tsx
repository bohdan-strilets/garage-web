import { StyledError } from './FieldError.styles';
import type { FieldErrorProps } from './FieldError.types';

export const FieldError = ({ message, className }: FieldErrorProps) => {
  if (!message) return null;

  return <StyledError className={className}>{message}</StyledError>;
};
