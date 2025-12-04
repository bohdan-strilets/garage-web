import { StyledText } from './Text.styles';
import type { TextProps } from './Text.types';

export const Text = ({
  children,
  as = 'p',
  size = 'md',
  color = 'default',
  weight = 400,
  align = 'left',
  noWrap,
  className,
}: TextProps) => {
  return (
    <StyledText
      as={as}
      className={className}
      $size={size}
      $color={color}
      $weight={weight}
      $align={align}
      $noWrap={noWrap}
    >
      {children}
    </StyledText>
  );
};
