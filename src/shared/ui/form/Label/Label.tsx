import { RequiredMark, StyledLabel } from './Label.styles';
import type { LabelProps } from './Label.types';

export const Label = ({ children, htmlFor, required, fullWidth, className }: LabelProps) => {
  return (
    <StyledLabel $fullWidth={fullWidth} htmlFor={htmlFor} className={className}>
      {children}
      {required && <RequiredMark>*</RequiredMark>}
    </StyledLabel>
  );
};
