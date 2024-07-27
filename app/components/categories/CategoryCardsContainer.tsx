"use client";
import {
  fetchCategories,
  createCategory,
  deleteCategory,
} from "@/app/api/categories/queryFn";
import Loading from "@/app/loading";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import CategoryCardsArea from "./CategoryCardsArea";

const CategoryContainer = () => {
  const searchParams = useSearchParams();
  const boardId = Number(searchParams.get("id"));
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["categories", boardId],
    queryFn: () => fetchCategories(boardId),
  });

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

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories", boardId] });
    },
  });

  const handleSave = () => {
    createMutation.mutate({ boardId, categoryTitle: newCategoryTitle });
  };

  const handleDelete = (categoryId: number) => {
    deleteMutation.mutate(categoryId);
  };

  if (isLoading) return <Loading />;
  if (!data) return <div>dataがありません</div>;

  return (
    <CategoryCardsArea
      categories={data}
      isOpen={isOpen}
      handleChange={(e) => setNewCategoryTitle(e.target.value)}
      handleSave={handleSave}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
};

export default CategoryContainer;
