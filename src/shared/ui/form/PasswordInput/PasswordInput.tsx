import { forwardRef, useState } from 'react';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { Input } from '../Input';
import { ToggleButton, Wrapper } from './PasswordInput.styles';
import type { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ fullWidth = true, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => setVisible((prev) => !prev);
    const type = visible ? 'text' : 'password';

    return (
      <Wrapper $fullWidth={fullWidth}>
        <Input ref={ref} type={type} fullWidth={fullWidth} {...rest} />
        <ToggleButton
          type="button"
          onClick={toggle}
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <IoMdEyeOff /> : <IoMdEye />}
        </ToggleButton>
      </Wrapper>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
