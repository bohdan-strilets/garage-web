import { root } from "./Header.css";

import type { HeaderProps } from "./types/HeaderProps";

export const Header = ({ children }: HeaderProps) => {
  return <header className={root}>{children}</header>;
};
