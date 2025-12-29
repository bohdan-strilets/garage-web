import { Link } from "@tanstack/react-router";

import { active, icon, item, label, link } from "./NavigationAction.css";

import type { NavigationActionProps } from "./types/NavigationActionProps";

export const NavigationAction = ({ icon: Icon, text, to }: NavigationActionProps) => {
  return (
    <li className={item}>
      <Link to={to} className={link} activeProps={{ className: active }}>
        <Icon className={icon} aria-hidden />
        <span className={label}>{text}</span>
      </Link>
    </li>
  );
};
