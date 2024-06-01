"use client";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import useSWR from "swr";
import Loading from "../../loading";
import NotFound from "../../not-found";
import { BoardProps } from "../../types/type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import CreateBoardModal from "../molecules/CreateBoardModal";
import BoardCard from "../molecules/BoardCard";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<BoardProps[] | null>);
}

const SideBarWithBoardsArea = () => {
  const { data, error } = useSWR("http://localhost:8083/boards", fetcher);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // ReactQueryでの取得
  // const CategoriesArea = () => {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["boards"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:8083/boards");
  //     return data;
  //   },
  // });
  const [newBoardName, setNewBoardName] = useState("");

  const mutation = useMutation({
    mutationFn: (newBoard: { newBoard: string }) => {
      return axios.post("http://localhost:8083/boards", newBoard);
    },
  });

  const handleSave = () => {
    mutation.mutate({ newBoard: newBoardName });
    onClose();
  };

  if (error) return <NotFound />;
  if (!data) return <Loading />;
  return (
    <Box
      height={"92vh"}
      minWidth={250}
      bg={"#496AAF"}
      p={5}
      boxShadow={"2px 2px 4px"}
      position={"sticky"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={5}
      >
        <Heading fontSize={17} color={"white"}>
          ボード一覧
        </Heading>
        <AddIcon
          boxSize={3}
          color={"white"}
          onClick={onOpen}
          _hover={{ transform: "scale(1.3)" }}
          sx={{ cursor: "pointer", mx: 1, transition: "0.3s" }}
        />
      </Box>
      <CreateBoardModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={(e) => setNewBoardName(e.target.value)}
        onSave={handleSave}
      />
      {data.map((boardData) => (
        <BoardCard key={boardData.id} props={boardData} />
      ))}
    </Box>
  );
};

export default SideBarWithBoardsArea;
