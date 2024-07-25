import axios from "axios";

export const fetchCategories = async (boardId: number | null) => {
  const { data } = await axios.get(
    `http://localhost:8083/categories?board_id=${boardId}`
  );
  return data;
};

export const createCategory = async (
  boardId: number | null,
  categoryTitle: string
) => {
  const { data } = await axios.post(
    `http://localhost:8083/categories?board_id=${boardId}`,
    {
      board_id: boardId,
      category_title: categoryTitle,
    }
  );
  return data;
};

export const deleteCategory = async (boardId: number) => {
  const { data } = await axios.delete(
    `http://localhost:8083/categories?board_id=${boardId}`
  );
  return data;
};
