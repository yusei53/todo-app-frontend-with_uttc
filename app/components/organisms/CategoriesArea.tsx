"use client";
import Loading from "../../loading";
import { Box } from "@chakra-ui/react";
import CategoryCard from "../molecules/CategoryCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { CategoryProps } from "../../types/type";

const CategoriesArea = () => {
  const searchParams = useSearchParams();
  const boardId = searchParams.get("id");

  const { isLoading, data } = useQuery({
    queryKey: ["categories", boardId],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8083/categories?board_id=${boardId}`
      );
      return data;
    },
  });

  if (isLoading) return <Loading />;
  if (!data) return <div>dataがありません</div>;

  return (
    <Box overflowX={"auto"} overflowY={"hidden"}>
      <Box
        pl={3}
        mt={10}
        overflowX={"auto"}
        display={"flex"}
        alignItems={"flex-start"}
        height={"100%"}
      >
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
