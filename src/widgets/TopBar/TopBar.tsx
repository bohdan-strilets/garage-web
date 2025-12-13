import type { FC } from 'react';

import { ProfileBar } from '@widgets/ProfileBar';

import { Logo } from '@shared/ui/brand/Logo';

import * as styles from './TopBar.css';

export const TopBar: FC = () => {
  return (
    <header className={styles.root}>
      <Logo />
      <ProfileBar />
    </header>
  );
};
