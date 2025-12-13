import type { FC } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaUserLarge } from 'react-icons/fa6';
import { IoNotificationsSharp } from 'react-icons/io5';

import { Button } from '@shared/ui/controls/Button';

import * as styles from './ProfileBar.css';

export const ProfileBar: FC = () => {
  return (
    <div className={styles.root}>
      <div>
        <Button className={styles.button} tone="muted" size="sm">
          <BsMoonStarsFill />
        </Button>
        <Button className={styles.button} tone="muted" size="sm">
          <IoNotificationsSharp />
        </Button>
      </div>

      <Button tone="primary" size="sm">
        <FaUserLarge />
        <span className={styles.label}>Profile</span>
      </Button>
    </div>
  );
};
