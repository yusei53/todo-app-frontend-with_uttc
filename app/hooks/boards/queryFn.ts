import axios from "axios";

export const fetchBoards = async () => {
  const { data } = await axios.get("http://localhost:8083/boards");
  return data;
};
