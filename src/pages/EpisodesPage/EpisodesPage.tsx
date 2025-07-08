import type { FC } from 'react';
import styles from '../../components/main/Main.module.css';
import { Header } from '../../components/header/Header.tsx';
import { Episodes } from '../../components/episodes/Episodes.tsx';

export const EpisodesPage: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Episodes />
      </div>
    </div>
  );
};
