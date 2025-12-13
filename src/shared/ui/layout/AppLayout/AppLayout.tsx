import type { FC, ReactNode } from 'react';

import { SideBar } from '@widgets/SideBar';
import { TopBar } from '@widgets/TopBar';

import { Container } from '../Container';

import * as styles from './AppLayout.css';

export type AppLayoutProps = {
  children?: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <TopBar />
      <div className={styles.body}>
        <SideBar />
        <Container>{children}</Container>
      </div>
    </div>
  );
};
