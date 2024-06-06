"use client";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Loading from "../../loading";
import { BoardProps } from "../../types/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import CreateBoardModal from "../molecules/CreateBoardModal";
import BoardCard from "../molecules/BoardCard";
import {
  createBoard,
  deleteBoard,
  fetchBoards,
} from "@/app/api/boards/queryFn";

// swrを使った場合
// async function fetcher(key: string) {
//   return fetch(key).then((res) => res.json() as Promise<BoardProps[] | null>);
// }

const SideBarWithBoardsArea = () => {
  const [newBoardName, setNewBoardName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["boards"],
    queryFn: fetchBoards,
  });

  const createMutation = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
      onClose();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
  });

  const handleSave = () => {
    createMutation.mutate(newBoardName);
  };

  const handleDelete = (board_id: number) => {
    deleteMutation.mutate(board_id);
  };

  // swrを使った場合(GET)
  // const { data, error } = useSWR("http://localhost:8083/boards", fetcher);

  if (isLoading) return <Loading />;
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
      {data.map((data: BoardProps) => (
        <BoardCard
          key={data.id}
          id={data.id}
          title={data.title}
          handleDelete={() => handleDelete(data.id)}
        />
      ))}
    </Box>
  );
};

export default SideBarWithBoardsArea;
