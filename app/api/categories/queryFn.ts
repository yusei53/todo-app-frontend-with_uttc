import axios from "axios";

export const fetchCategories = async (boardId: string | null) => {
  const { data } = await axios.get(
    `http://localhost:8083/categories?board_id=${boardId}`
  );
  return data;
};
