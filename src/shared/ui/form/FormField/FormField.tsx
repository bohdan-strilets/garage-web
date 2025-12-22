import { cloneElement } from "react";

import { useFormContext } from "react-hook-form";

import { Stack } from "@shared/ui/layout/Stack";
import { Caption } from "@shared/ui/typography/Caption";
import { Label } from "@shared/ui/typography/Label";

import { FieldError } from "../FieldError";

import type { FormFieldProps } from "./types/FormFieldProps";

export const FormField = ({
  name,
  label,
  description,
  required,
  disabled,
  children,
}: FormFieldProps) => {
  const { formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  const isSubmitting = formState.isSubmitting;
  const controlId = children.props.id ?? name;

  const errorMessage = error?.message;
  const hasError = Boolean(error);

  const input = cloneElement(children, {
    id: controlId,
    hasError,
    disabled: children.props.disabled ?? disabled ?? isSubmitting,
  });

  return (
    <Stack gap="xs">
      {label && (
        <Label htmlFor={controlId} required={required}>
          {label}
        </Label>
      )}
      {description && <Caption>{description}</Caption>}
      {input}
      {hasError && <FieldError>{errorMessage}</FieldError>}
    </Stack>
  );
};
