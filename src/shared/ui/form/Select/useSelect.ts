import { useEffect, useMemo, useRef, useState } from 'react';

import type { KeyboardEvent } from 'react';

import type { UseSelectParams, UseSelectResult } from './Select.types';

export const useSelect = ({
  value,
  onChange,
  options,
  disabled,
}: UseSelectParams): UseSelectResult => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value) ?? null,
    [options, value],
  );

  const enabledOptions = useMemo(() => options.filter((opt) => !opt.disabled), [options]);

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(null);
      return;
    }

    if (selectedOption) {
      const idx = enabledOptions.findIndex((opt) => opt.value === selectedOption.value);
      setActiveIndex(idx >= 0 ? idx : 0);
    } else {
      setActiveIndex(enabledOptions.length ? 0 : null);
    }
  }, [isOpen, selectedOption, enabledOptions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const close = () => setIsOpen(false);

  const handleSelect = (optionValue: string) => {
    if (disabled) return;
    onChange?.(optionValue);
    close();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (
      !isOpen &&
      (event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'Enter' ||
        event.key === ' ')
    ) {
      event.preventDefault();
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!enabledOptions.length) return;

      setActiveIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % enabledOptions.length;
      });
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!enabledOptions.length) return;

      setActiveIndex((prev) => {
        if (prev === null) return enabledOptions.length - 1;
        return (prev - 1 + enabledOptions.length) % enabledOptions.length;
      });
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (activeIndex === null || !enabledOptions[activeIndex]) return;

      handleSelect(enabledOptions[activeIndex].value);
    }
  };

  return {
    wrapperRef,
    isOpen,
    activeIndex,
    selectedOption,
    enabledOptions,
    toggleOpen,
    close,
    handleSelect,
    handleKeyDown,
  };
};
