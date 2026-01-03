import type { ElementType } from "react";

import clsx from "clsx";

import { root } from "./Text.css";

import type { TextProps } from "./types/TextProps";

export const Text = <T extends ElementType = "p">({
  as,
  className,
  children,
  variant,
  tone,
  size,
  weight,
  lineHeight,
  letterSpacing,
  align,
  ...props
}: TextProps<T>) => {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component
      className={clsx(
        root({ variant, tone, size, weight, lineHeight, letterSpacing, align }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
