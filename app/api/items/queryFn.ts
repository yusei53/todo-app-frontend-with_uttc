import axios from "axios";

export const fetchItems = async (categoryId: number) => {
  const { data } = await axios.get(
    `http://localhost:8083/items?category_id=${categoryId}`
  );
  return data;
};

export const createItems = async (
  categoryId: number,
  itemTitle: string,
  itemContent: string,
  ExpiredAt: string
) => {
  const { data } = await axios.post(
    `http://localhost:8083/items?category_id=${categoryId}`,
    {
      category_id: categoryId,
      item_title: itemTitle,
      content: itemContent,
      expired_at: ExpiredAt,
    }
  );
  return data;
};
