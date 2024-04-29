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
