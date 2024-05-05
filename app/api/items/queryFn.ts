import axios from "axios";

export const fetchItems = async (categoryId: number | null) => {
  const { data } = await axios.get(
    `http://localhost:8083/items?category_id=${categoryId}`
  );
  return data;
};

// export const createItems = async (
//   categoryId: number | null,
//   itemTitle: string,
//   itemContent: string,
//   itemExpiredAt: Date
// ) => {
//   const { data } = await axios.post(
//     `http://localhost:8083/items?category_id=${categoryId}`,
//     {
//       category_id: categoryId,
//       title: itemTitle,
//       content: itemContent,
//       expired_at: itemExpiredAt,
//     }
//   );
//   return data;
// };
