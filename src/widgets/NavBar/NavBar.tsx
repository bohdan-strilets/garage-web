import { Link, useMatchRoute } from '@tanstack/react-router';
import type { FC } from 'react';

import { mainNav } from './data/mainNav';
import { profileNav } from './data/profileNav';
import * as styles from './NavBar.css';

export const NavBar: FC = () => {
  const matchRoute = useMatchRoute();

  return (
    <nav className={styles.root}>
      <ul className={styles.mainList}>
        {mainNav.map((item) => {
          const isActive = matchRoute({ to: item.to, fuzzy: true });

          return (
            <li key={item.id} className={styles.item}>
              <Link
                className={styles.link({ active: Boolean(isActive) })}
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className={styles.profileList}>
        {profileNav.map((item) => {
          const isActive = matchRoute({ to: item.to, fuzzy: true });

          return (
            <li key={item.id} className={styles.item}>
              <Link
                className={styles.link({ active: Boolean(isActive) })}
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
