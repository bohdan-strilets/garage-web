import { root } from "./Container.css";

import type { ContainerProps } from "./types/ContainerProps";

export const Container = ({ children }: ContainerProps) => {
  return <div className={root}>{children}</div>;
};
