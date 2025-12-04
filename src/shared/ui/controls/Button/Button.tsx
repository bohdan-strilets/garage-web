import { IconWrapper, StyledButton } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      $disabled={isDisabled}
      {...rest}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}

      {loading ? 'Loading…' : children}

      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </StyledButton>
  );
};
