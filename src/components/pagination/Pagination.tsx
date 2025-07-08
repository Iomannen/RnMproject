import type { FC } from 'react';
import { Pagination } from 'antd';

type Props = {
  onClick: (value: number) => void;
  pages: number;
};

export const PaginationComponent: FC<Props> = ({ onClick, pages }) => {
  return (
    <Pagination
      total={pages}
      defaultCurrent={1}
      defaultPageSize={1}
      onChange={(event) => onClick(event)}
    />
  );
};
