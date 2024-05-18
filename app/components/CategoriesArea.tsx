"use client";
import NotFound from "../not-found";
import Loading from "../loading";
import { Box } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { CategoryProps } from "../types/type";

const CategoriesArea = () => {
  const searchParams = useSearchParams();
  const boardId = searchParams.get("id");

  const { isLoading, error, data } = useQuery({
    queryKey: ["categories", boardId],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8083/categories?board_id=${boardId}`
      );
      return data;
    },
  });

  if (error) return <NotFound />;
  if (isLoading) return <Loading />;
  return (
    <Box flex={1} overflowX={"auto"} whiteSpace={"pre"}>
      <Box display="flex" mt={10}>
        {data.map((categoryData: CategoryProps) => (
          <CategoryCard
            key={categoryData.id}
            id={categoryData.id}
            title={categoryData.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesArea;
