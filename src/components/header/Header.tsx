import type { FC } from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <div className={styles.inner}>
        <div className={styles.title} onClick={() => navigate('/characters')}>
          My Website
        </div>
        <div className={styles.vkladka} onClick={() => navigate('/characters')}>
          Characters
        </div>
        <div className={styles.vkladka} onClick={() => navigate('/locations')}>
          Locations
        </div>
        <div className={styles.vkladka} onClick={() => navigate('/episodes')}>
          Episodes
        </div>
        <div className={styles.vkladka} onClick={() => navigate('/cats')}>
          Cats
        </div>
      </div>
      <div className={styles.inner}>
        <div>Image</div>
      </div>
    </div>
  );
};
