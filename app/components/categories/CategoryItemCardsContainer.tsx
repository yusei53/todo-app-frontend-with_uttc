import { useDisclosure } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../../loading";
import { useCallback, useState } from "react";
import { createItems, fetchItems } from "@/app/api/items/queryFn";
import CategoryItemCard from "./CategoryItemCard";

type CategoryCardProps = {
  categoryId: number;
  categoryTitle: string;
  handleDelete: () => void;
};

const CategoryItemCardsContainer: React.FC<CategoryCardProps> = ({
  categoryId,
  categoryTitle,
  handleDelete,
}) => {
  const queryClient = useQueryClient();

  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemContent, setItemContent] = useState<string>("");
  const Today = new Date();
  const [itemExpiredAt, setItemExpiredAt] = useState<Date>(Today);
  const [isAddCardOpen, setIsAddCardOpen] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteClick = () => {
    handleDelete();
    onClose();
  };

  const handleToggle = useCallback(() => {
    setIsAddCardOpen((value) => !value);
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["items", categoryId],
    queryFn: () => fetchItems(categoryId),
  });

  const createMutation = useMutation({
    mutationFn: ({
      categoryId,
      itemTitle,
      itemContent,
      itemExpiredAt,
    }: {
      categoryId: number;
      itemTitle: string;
      itemContent: string;
      itemExpiredAt: string;
    }) => createItems(categoryId, itemTitle, itemContent, itemExpiredAt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items", categoryId] });
      setIsAddCardOpen(false);
    },
  });

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const handleSave = () => {
    createMutation.mutate({
      categoryId,
      itemTitle,
      itemContent,
      itemExpiredAt: formatDate(itemExpiredAt),
    });
  };

  if (isLoading) return <Loading />;

  return (
    <CategoryItemCard
      categoryTitle={categoryTitle}
      items={data}
      isAddCardOpen={isAddCardOpen}
      isOpen={isOpen}
      itemExpiredAt={itemExpiredAt}
      Today={Today}
      onToggle={handleToggle}
      onSave={handleSave}
      onCloseModal={onClose}
      onOpenModal={onOpen}
      onDelete={handleDeleteClick}
      onChangeTitle={(e) => setItemTitle(e.target.value)}
      onChangeContent={(e) => setItemContent(e.target.value)}
      setItemExpiredAt={setItemExpiredAt}
    />
  );
};

export default CategoryItemCardsContainer;
