/* eslint-disable no-unused-vars */

import type { KeyboardEvent, RefObject } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  value?: string | null;
  onChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  invalid?: boolean;
}

export interface WrapperProps {
  $fullWidth?: boolean;
  $disabled?: boolean;
}

export interface TriggerProps {
  $invalid?: boolean;
  $isOpen?: boolean;
}

export interface OptionProps {
  $active?: boolean;
  $selected?: boolean;
  $disabled?: boolean;
}

export interface UseSelectParams {
  value?: string | null;
  onChange?: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
}

export interface UseSelectResult {
  wrapperRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  activeIndex: number | null;
  selectedOption: SelectOption | null;
  enabledOptions: SelectOption[];
  toggleOpen: () => void;
  close: () => void;
  handleSelect: (optionValue: string) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}
