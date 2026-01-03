import { container, root } from "./PublicLayout.css";
import { Footer } from "./ui/Footer/Footer";
import { Header } from "./ui/Header/Header";
import { Main } from "./ui/Main/Main";

import type { PublicLayoutProps } from "./types/PublicLayoutProps";

export const PublicLayout = ({ children, footer }: PublicLayoutProps) => {
  return (
    <div className={root}>
      <div className={container} aria-labelledby="auth-title">
        <Header />
        <Main>{children}</Main>
        {footer && <Footer>{footer}</Footer>}
      </div>
    </div>
  );
};
