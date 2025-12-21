import clsx from "clsx";

import { root } from "./Heading.css";

import type { HeadingProps } from "./types/HeadingProps";

export const Heading = ({ as, children, className, ...props }: HeadingProps) => {
  const Component = as ?? "h1";

  return (
    <Component className={clsx(root({ as }), className)} {...props}>
      {children}
    </Component>
  );
};
