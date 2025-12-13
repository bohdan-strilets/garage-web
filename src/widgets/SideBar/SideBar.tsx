import type { FC } from 'react';

import { NavBar } from '@widgets/NavBar';

import * as styles from './SideBar.css';
export const SideBar: FC = () => {
  return (
    <aside className={styles.root}>
      <NavBar />
    </aside>
  );
};
