import { NavigationAction } from "../NavigationAction/NavigationAction";

import { list, root } from "./Navigation.css";

import type { NavigationProps } from "./types/NavigationProps";

export const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav className={root} aria-label="Main navigation">
      <ul className={list}>
        {items.map(({ id, icon, label }) => (
          <NavigationAction key={id} icon={icon} text={label} />
        ))}
      </ul>
    </nav>
  );
};
