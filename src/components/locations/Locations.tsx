import { type FC, useState } from 'react';
import { useGetLocationQuery } from '../../services/RnMAPI.ts';
import styles from './Locations.module.css';
import { PaginationComponent } from '../pagination/Pagination.tsx';

export const Locations: FC = () => {
  const [page, setPage] = useState<string>('1');

  const { data: locations, isLoading: locationsLoading } =
    useGetLocationQuery(page);

  const clickHandler = (value: number) => {
    setPage(String(value));
  };

  return (
    <div className={styles.pagelayout}>
      <div className={styles.page}>
        {locationsLoading
          ? 'Loading'
          : locations !== undefined
            ? locations.results.map((elem) => {
                return (
                  <div className={styles.layout} key={elem.id}>
                    <div>{elem.name}</div>
                    <div>{`Type: ${elem.type}`}</div>
                    <div>{`Dimension: ${elem.dimension}`}</div>
                    <div>{`Residents: ${elem.residents.length}`}</div>
                    <div>{`Created: ${elem.created}`}</div>
                  </div>
                );
              })
            : null}
      </div>
      <PaginationComponent
        onClick={clickHandler}
        pages={locations !== undefined ? locations.info.pages : 5}
      />
    </div>
  );
};
