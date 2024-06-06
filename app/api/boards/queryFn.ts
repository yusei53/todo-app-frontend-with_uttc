import axios from "axios";

export const fetchBoards = async () => {
  const { data } = await axios.get("http://localhost:8083/boards");
  return data;
};

export const createBoard = async (board_title: string) => {
  const { data } = await axios.post("http://localhost:8083/boards", {
    board_title,
  });
  return data;
};

export const deleteBoard = async (board_id: number) => {
  const { data } = await axios.delete(
    `http://localhost:8083/boards/${board_id}`
  );
  return data;
};
