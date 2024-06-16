"use client";
import Loading from "../../loading";
import { Box } from "@chakra-ui/react";
import CategoryCard from "../molecules/CategoryCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { CategoryProps } from "../../types/type";
import AddButton from "../atom/AddButton";
import { useCallback, useState } from "react";
import TextAreaButtonGroup from "../atom/TextAreaButtonGroup";
import CategoryCardContainer from "../atom/CategoryCardContainer";
import { createCategory, fetchCategories } from "@/app/api/categories/queryFn";

const CategoriesArea = () => {
  const searchParams = useSearchParams();
  const boardId = Number(searchParams.get("id"));
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["categories", boardId],
    queryFn: () => fetchCategories(boardId),
  });

  const handleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const createMutation = useMutation({
    mutationFn: ({
      boardId,
      categoryTitle,
    }: {
      boardId: number;
      categoryTitle: string;
    }) => createCategory(boardId, categoryTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories", boardId] });
      setIsOpen(false);
    },
  });

  const handleSave = () => {
    createMutation.mutate({ boardId, categoryTitle: newCategoryTitle });
  };

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
        {isOpen ? (
          <CategoryCardContainer>
            <TextAreaButtonGroup
              title={"リストを追加"}
              placeholder={"リストのタイトルを入力"}
              onChange={(e) => setNewCategoryTitle(e.target.value)}
              onSave={handleSave}
              onClose={handleOpen}
            />
          </CategoryCardContainer>
        ) : (
          <AddButton
            title={"リストを追加"}
            bgColor={"rgba(255, 255, 255, 0.5)"}
            color={"white"}
            minWidth={272}
            sx={{ mx: 2, p: 4 }}
            handleOpen={handleOpen}
          />
        )}
      </Box>
    </Box>
  );
};

export default CategoriesArea;
