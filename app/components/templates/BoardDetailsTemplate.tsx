"use client";
import { fetchCategories, createCategory } from "@/app/api/categories/queryFn";
import Loading from "@/app/loading";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import CategoriesArea from "../organisms/CategoriesArea";

const BoardDetailsTemplate = () => {
  const searchParams = useSearchParams();
  const boardId = Number(searchParams.get("id"));
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["categories", boardId],
    queryFn: () => fetchCategories(boardId),
  });

  const handleToggle = useCallback(() => {
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
    <CategoriesArea
      categoryData={data}
      isOpen={isOpen}
      handleChange={(e) => setNewCategoryTitle(e.target.value)}
      handleSave={handleSave}
      handleToggle={handleToggle}
    />
  );
};

export default BoardDetailsTemplate;
