"use client";
import { Box, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import Loading from "../loading";
import NotFound from "../not-found";
import BoardCard from "./BoardCard";
import { BoardProps } from "../types/type";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<BoardProps[] | null>);
}

const SideBarWithBoardsArea = () => {
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
    <Box
      height={"92vh"}
      width={250}
      bg={"#496AAF"}
      p={5}
      boxShadow={"2px 2px 4px"}
    >
      <Box display={"flex"} alignItems={"center"} mb={5}>
        <Heading fontSize={17} color={"white"}>
          ボード一覧
        </Heading>
      </Box>
      {data.map((boardData) => (
        <BoardCard key={boardData.id} props={boardData} />
      ))}
    </Box>
  );
};

export default SideBarWithBoardsArea;
