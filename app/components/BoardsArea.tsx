"use client";
import useSWR from "swr";
import NotFound from "../not-found";
import Loading from "../loading";
import BoardCard from "./BoardCard";

type BoardProps = {
  id: number;
  title: string;
  deleted: boolean;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<BoardProps[] | null>);
}

const BoardsArea = () => {
  const { data, error } = useSWR("http://localhost:8083/boards", fetcher);

  // ReactQueryでの取得
  // const CategoriesArea = () => {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["boards"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:8083/boards");
  //     return data;
  //   },
  // });

  if (error) return <NotFound />;
  if (!data) return <Loading />;
  return (
    <>
      {data.map((boardData) => (
        <BoardCard key={boardData.id} props={boardData} />
      ))}
    </>
  );
};

export default BoardsArea;
