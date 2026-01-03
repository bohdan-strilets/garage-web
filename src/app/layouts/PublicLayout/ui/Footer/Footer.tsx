import { root } from "./Footer.css";

import type { FooterProps } from "./types/FooterProps";

export const Footer = ({ children }: FooterProps) => {
  return <footer className={root}>{children}</footer>;
};
