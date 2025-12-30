import { Logo } from "@shared/ui/brand/Logo";
import { Text } from "@shared/ui/typography/Text";

import { container, card, logo, footer, root } from "./AuthLayout.css";

import type { AuthLayoutProps } from "./types/AuthLayoutProps";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={root}>
      <main className={container} aria-labelledby="auth-title">
        <div className={logo}>
          <Logo variant="full" size="sm" />
        </div>

        <section className={card}>{children}</section>

        <div className={footer}>
          <Text size="sm" weight="medium" tone="muted">
            Garage {currentYear} © All rights reserved.
          </Text>
        </div>
      </main>
    </div>
  );
};
