import { type FC } from 'react';
import { Header } from '../header/Header.tsx';
import styles from './Main.module.css';
import { Characters } from '../characters/Characters.tsx';

export const MainPage: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Characters />
      </div>
    </div>
  );
};
