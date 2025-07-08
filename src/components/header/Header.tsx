import type { FC } from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <div className={styles.inner}>
        <div className={styles.title}>Rick'n'Morty Cyclopedy</div>
        <div className={styles.vkladka} onClick={() => navigate('/characters')}>
          Characters
        </div>
        <div className={styles.vkladka} onClick={() => navigate('/locations')}>
          Locations
        </div>
        <div className={styles.vkladka} onClick={() => navigate('/episodes')}>
          Episodes
        </div>
      </div>
      <div className={styles.inner}>
        <div>Image</div>
      </div>
    </div>
  );
};
