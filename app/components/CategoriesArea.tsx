"use client";
import NotFound from "../not-found";
import Loading from "../loading";
import { Box } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type BoardProps = {
  id: number;
  title: string;
  deleted: boolean;
};

const CategoriesArea = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["boards"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8083/boards");
      return data;
    },
  });

  if (error) return <NotFound />;
  if (isLoading) return <Loading />;
  return (
    <Box flex={1}>
      <Box display="flex" overflow={"auto"} whiteSpace={"pre"} mt={10}>
        {data.map((boardData: BoardProps) => (
          <CategoryCard key={boardData.id} props={boardData} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesArea;
