import type { FC } from 'react';
import { useGetCatsQuery } from '../../services/RnMAPI.ts';
import styles from './Cats.module.css';
import { PaginationComponent } from '../pagination/Pagination.tsx';
import { useState } from 'react';
import type { CatCard } from '../../types/types.ts';
import { Spin } from 'antd';

export const Cats: FC = () => {
  const [page, setPage] = useState<string>('1');

  const { data, error, isLoading } = useGetCatsQuery(Number(page));
  const cardClickHandler = (url: string) => {
    window.open(url, '_blank');
  };
  const clickHandler = (value: number): void => {
    setPage(String(value));
  };

  console.log(data);
  return (
    <div className={styles.pageLayout}>
      <div className={styles.layout}>
        {data !== undefined ? (
          data.map((elem: CatCard) => {
            return (
              <div
                className={styles.cardLayout}
                key={elem.id}
                onClick={() => {
                  cardClickHandler(elem.breeds[0].wikipedia_url);
                }}
              >
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={elem.url}
                    alt={'cat'}
                  ></img>
                </div>
                <div className={styles.textContainer}>
                  <div>
                    <span className={styles.tag}>Breed: </span>
                    <span className={styles.breed}>{elem.breeds[0].name}</span>
                  </div>
                  <div>
                    <span className={styles.tag}>Temperament: </span>
                    <span className={styles.temperament}>
                      {elem.breeds[0].temperament}
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.text}>
                      {elem.breeds[0].description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : isLoading ? (
          <Spin tip="Loading..." size="large"></Spin>
        ) : (
          <div>{`Error: ${error}`}</div>
        )}
      </div>
      {data ? <PaginationComponent onClick={clickHandler} pages={94} /> : null}
    </div>
  );
};
