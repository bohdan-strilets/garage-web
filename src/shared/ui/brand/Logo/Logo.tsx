import type { FC } from 'react';

import garageIcon from '@assets/logo/garageIcon.png';

import * as styles from './Logo.css';
import type { LogoProps } from './types/LogoProps';

export const Logo: FC<LogoProps> = ({ isShowTitle = true, isShowSubtitle = true }) => {
  const displaySubtitle = isShowTitle || isShowSubtitle;

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={garageIcon} alt="Garage app logo" />
      {displaySubtitle && (
        <div>
          {isShowTitle && <p className={styles.title}>Garage</p>}
          {isShowSubtitle && <p className={styles.subtitle}>your car - structured</p>}
        </div>
      )}
    </div>
  );
};
