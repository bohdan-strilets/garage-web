import type { ReactNode } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

import {
  Arrow,
  Dropdown,
  Option,
  OptionCheck,
  OptionLabel,
  PlaceholderText,
  Trigger,
  ValueText,
  Wrapper,
} from './Select.styles';
import type { SelectProps } from './Select.types';
import { useSelect } from './useSelect';

export const Select = ({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  disabled,
  fullWidth = true,
  invalid,
}: SelectProps) => {
  const {
    wrapperRef,
    isOpen,
    activeIndex,
    selectedOption,
    enabledOptions,
    toggleOpen,
    handleKeyDown,
    handleSelect,
  } = useSelect({ value, onChange, options, disabled });

  const renderValue = (): ReactNode => {
    if (!selectedOption) {
      return <PlaceholderText>{placeholder}</PlaceholderText>;
    }

    return <ValueText>{selectedOption.label}</ValueText>;
  };

  return (
    <Wrapper ref={wrapperRef} $fullWidth={fullWidth} $disabled={disabled}>
      <Trigger
        type="button"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        $invalid={invalid}
        $isOpen={isOpen}
      >
        {renderValue()}
        <Arrow>{isOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}</Arrow>
      </Trigger>

      {isOpen && (
        <Dropdown role="listbox">
          {options.map((option) => {
            const selected = option.value === value;
            const indexInEnabled = enabledOptions.findIndex((opt) => opt.value === option.value);
            const active = indexInEnabled >= 0 && indexInEnabled === activeIndex;

            return (
              <Option
                key={option.value}
                type="button"
                onClick={() => !option.disabled && handleSelect(option.value)}
                disabled={option.disabled}
                $disabled={option.disabled}
                $selected={selected}
                $active={active}
                role="option"
                aria-selected={selected}
              >
                <OptionLabel>{option.label}</OptionLabel>
                {selected && (
                  <OptionCheck>
                    <FaCheck />
                  </OptionCheck>
                )}
              </Option>
            );
          })}
        </Dropdown>
      )}
    </Wrapper>
  );
};
