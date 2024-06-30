"use client";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { fetchCategories, createCategory } from "../api/categories/queryFn";
import CategoriesArea from "../components/organisms/CategoriesArea";
import Loading from "../loading";

const BoardPage = () => {
  const searchParams = useSearchParams();
  const boardId = Number(searchParams.get("id"));
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["categories", boardId],
    queryFn: () => fetchCategories(boardId),
  });

  const handleClose = useCallback(() => {
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
      onChange={(e) => setNewCategoryTitle(e.target.value)}
      onSave={handleSave}
      onClose={handleClose}
    />
  );
};

export default BoardPage;
