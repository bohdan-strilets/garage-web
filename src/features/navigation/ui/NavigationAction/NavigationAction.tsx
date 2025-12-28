import { icon, item, label } from "./NavigationAction.css";

import type { NavigationActionProps } from "./types/NavigationActionProps";

export const NavigationAction = ({ icon: Icon, text }: NavigationActionProps) => {
  return (
    <li>
      <button type="button" className={item}>
        <Icon className={icon} aria-hidden />
        <span className={label}>{text}</span>
      </button>
    </li>
  );
};
