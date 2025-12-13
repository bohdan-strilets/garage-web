import type { FC } from 'react';

import { mainNav } from './data/mainNav';
import { profileNav } from './data/profileNav';
import * as styles from './NavBar.css';

export const NavBar: FC = () => {
  return (
    <nav className={styles.root}>
      <ul className={styles.mainList}>
        {mainNav.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <button className={styles.button} type="button">
                <div className={styles.iconWrapper}>{item.icon}</div>
                <span className={styles.label}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <ul className={styles.profileList}>
        {profileNav.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <button className={styles.button} type="button">
                <div className={styles.iconWrapper}>{item.icon}</div>
                <span className={styles.label}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
