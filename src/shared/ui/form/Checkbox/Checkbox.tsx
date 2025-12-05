import { FaCheck } from 'react-icons/fa';

import {
  Box,
  BoxWrapper,
  HelperText,
  HiddenInput,
  LabelText,
  TextWrapper,
  Wrapper,
} from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({ label, helperText, disabled, ...rest }: CheckboxProps) => {
  const checked = Boolean(rest.checked);
  console.log(checked);

  return (
    <Wrapper>
      <BoxWrapper>
        <HiddenInput type="checkbox" disabled={disabled} {...rest} />
        <Box $checked={checked} $disabled={disabled}>
          {checked && <FaCheck />}
        </Box>
      </BoxWrapper>

      {(label || helperText) && (
        <TextWrapper>
          {label && <LabelText>{label}</LabelText>}
          {helperText && <HelperText>{helperText}</HelperText>}
        </TextWrapper>
      )}
    </Wrapper>
  );
};
