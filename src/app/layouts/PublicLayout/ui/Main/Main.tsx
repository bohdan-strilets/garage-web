import { root } from "./Main.css";

import type { MainProps } from "./types/MainProps";

export const Main = ({ children }: MainProps) => {
  return <main className={root}>{children}</main>;
};
