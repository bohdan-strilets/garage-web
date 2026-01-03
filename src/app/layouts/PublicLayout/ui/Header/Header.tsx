import { Logo } from "@shared/ui/brand/Logo";

import { root } from "./Header.css";

export const Header = () => {
  return (
    <header className={root}>
      <Logo variant="full" size="sm" />
    </header>
  );
};
