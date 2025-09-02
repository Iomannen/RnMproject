import type { FC } from 'react';
import { Header } from '../../components/header/Header.tsx';
import { Cats } from '../../components/cats/Cats.tsx';

export const CatsPage: FC = () => {
  return (
    <div>
      <Header />
      <Cats />
    </div>
  );
};
