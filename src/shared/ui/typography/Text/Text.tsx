import type { ElementType } from "react";

import clsx from "clsx";

import { root } from "./Text.css";

import type { TextProps } from "./types/TextProps";

export const Text = <T extends ElementType = "p">({
  as,
  className,
  children,
  ...props
}: TextProps<T>) => {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component className={clsx(root(props), className)} {...props}>
      {children}
    </Component>
  );
};
