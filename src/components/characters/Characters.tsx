import { type FC, useState } from 'react';
import { useGetCharactersQuery } from '../../services/RnMAPI.ts';
import styles from './Characters.module.css';
import { PaginationComponent } from '../pagination/Pagination.tsx';

export const Characters: FC = () => {
  const [page, setPage] = useState<string>('1');

  const { data: characters, isLoading: charactersLoading } =
    useGetCharactersQuery(page);

  const clickHandler = (value: number) => {
    setPage(String(value));
  };

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {charactersLoading ? (
          <div>Loading</div>
        ) : characters !== undefined ? (
          characters.results.map((elem) => (
            <div key={elem.id} className={styles.card}>
              <div className={styles.obertka}>
                <img
                  src={elem.image}
                  alt={`${elem.name} image`}
                  className={styles.image}
                ></img>
              </div>
              <div className={styles.obertka}>
                <div className={styles.info}>{elem.name}</div>
                <div className={styles.info}>{`Type: ${elem.type}`}</div>
                <div className={styles.info}>{`Gender: ${elem.gender}`}</div>
                <div className={styles.info}>{`Status: ${elem.status}`}</div>
                <div className={styles.info}>{`Race: ${elem.species}`}</div>
                <div
                  className={styles.info}
                >{`Current location: ${elem.location.name}`}</div>
                <div
                  className={styles.info}
                >{`Origin location: ${elem.origin.name}`}</div>
              </div>
            </div>
          ))
        ) : null}
      </div>
      <PaginationComponent
        onClick={clickHandler}
        pages={characters !== undefined ? characters.info.pages : 0}
      />
    </div>
  );
};
