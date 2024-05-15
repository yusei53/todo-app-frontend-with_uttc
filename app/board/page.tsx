"use client";
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { CategoryProps } from "../types/type";
import Loading from "../loading";

const BoardPage = () => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("id");

  const { isLoading, error, data } = useQuery({
    queryKey: ["categories", categoryName],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8083/categories?board_id=${categoryName}`
      );
      return data;
    },
  });

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Box display={"flex"}>
      {data.map((category: CategoryProps) => (
        <Box key={category.id} p={5}>
          <Text fontSize="xl">{category.title}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default BoardPage;
