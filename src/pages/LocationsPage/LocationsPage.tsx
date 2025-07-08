import type { FC } from 'react';
import { Locations } from '../../components/locations/Locations.tsx';
import { Header } from '../../components/header/Header.tsx';
import styles from '../../components/main/Main.module.css';

export const LocationsPage: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Locations />
      </div>
    </div>
  );
};
