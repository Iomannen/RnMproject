import { type FC, useState } from 'react';
import { useGetEpisodeQuery } from '../../services/RnMAPI.ts';
import styles from './Episodes.module.css';
import { PaginationComponent } from '../pagination/Pagination.tsx';

export const Episodes: FC = () => {
  const [page, setPage] = useState<string>('1');

  const { data: episodes, isLoading: episodesLoading } =
    useGetEpisodeQuery(page);

  const clickHandler = (value: number) => {
    setPage(String(value));
    console.log(episodes);
  };
  return (
    <div className={styles.goida}>
      <div className={styles.page}>
        {episodesLoading
          ? 'loading'
          : episodes !== undefined
            ? episodes.results.map((elem) => {
                return (
                  <div className={styles.layout} key={elem.id}>
                    <div>{elem.name}</div>
                    <div>{`Air date: ${elem.air_date}`}</div>
                    <div>{`Episode: ${elem.episode}`}</div>
                  </div>
                );
              })
            : null}
      </div>
      <PaginationComponent
        onClick={clickHandler}
        pages={episodes !== undefined ? episodes.info.pages : 0}
      />
    </div>
  );
};
