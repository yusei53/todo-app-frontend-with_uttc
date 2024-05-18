export type BoardProps = {
  id: number;
  title: string;
  deleted: boolean;
};

export type CategoryProps = {
  id: number;
  boardId: number;
  title: string;
  deleted: boolean;
};

export type ItemProps = {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  expiredAt: string;
  archived: boolean;
};
