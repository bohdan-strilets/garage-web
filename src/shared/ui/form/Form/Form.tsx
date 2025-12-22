import clsx from "clsx";
import { FormProvider, type FieldValues } from "react-hook-form";

import { Stack } from "@shared/ui/layout/Stack";

import type { FormProps } from "./types/FormProps";

export const Form = <TFormValues extends FieldValues>({
  form,
  onSubmit,
  children,
  noValidate = true,
  className,
}: FormProps<TFormValues>) => {
  return (
    <FormProvider {...form}>
      <form
        noValidate={noValidate}
        onSubmit={form.handleSubmit(onSubmit)}
        className={clsx(className)}
      >
        <Stack>{children}</Stack>
      </form>
    </FormProvider>
  );
};
