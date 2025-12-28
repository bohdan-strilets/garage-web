import { root } from "./Main.css";

import type { MainProps } from "./types/MainPtops";

export const Main = ({ children }: MainProps) => {
  return <main className={root}>{children}</main>;
};
