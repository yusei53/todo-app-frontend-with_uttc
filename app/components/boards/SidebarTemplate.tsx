"use client";
import { useDisclosure } from "@chakra-ui/react";
import Loading from "../../loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  createBoard,
  deleteBoard,
  fetchBoards,
} from "@/app/api/boards/queryFn";
import SideBarWithBoardsArea from "./SidebarWithBoardsArea";

// swrを使った場合
// async function fetcher(key: string) {
//   return fetch(key).then((res) => res.json() as Promise<BoardProps[] | null>);
// }

const SideBarTemplate = () => {
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

  const handleDelete = (boardId: number) => {
    deleteMutation.mutate(boardId);
  };

  // swrを使った場合(GET)
  // const { data, error } = useSWR("http://localhost:8083/boards", fetcher);

  if (isLoading) return <Loading />;
  return (
    <SideBarWithBoardsArea
      title={"ボード"}
      setNewBoardName={setNewBoardName}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      data={data}
      handleSave={handleSave}
      handleDelete={handleDelete}
    />
  );
};

export default SideBarTemplate;
