import { StyledHeading } from './Heading.styles';
import type { HeadingProps } from './Heading.types';

export const Heading = ({
  children,
  as = 'h1',
  size = 'xl',
  align = 'left',
  color = 'default',
  className,
}: HeadingProps) => {
  return (
    <StyledHeading as={as} $size={size} $align={align} $color={color} className={className}>
      {children}
    </StyledHeading>
  );
};
