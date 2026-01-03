import { Link } from "@tanstack/react-router";
import clsx from "clsx";

import logoImg from "@assets/images/logo/garage-logo.webp";

import { image, root, text } from "./Logo.css";

import type { LogoProps } from "./types/LogoProps";

export const Logo = ({ size, variant = "icon", className }: LogoProps) => {
  return (
    <Link to="/" className={clsx(root, className)}>
      <img src={logoImg} alt="Garage Logo" className={image({ size })} />
      {variant === "full" && <p className={text({ size })}>Garage</p>}
    </Link>
  );
};
