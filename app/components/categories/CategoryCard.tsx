import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ItemProps } from "../../types/type";
import ItemCard from "../items/ItemCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../../loading";
import { useCallback, useState } from "react";
import CategoryCardContainer from "./CategoryCardContainer";
import { createItems, fetchItems } from "@/app/api/items/queryFn";
import AddItemButtonBar from "../items/AddItemButtonBar";
import OpenAddItemArea from "../items/OpenAddItemArea";

type ItemCardProps = Pick<ItemProps, "id" | "title">;

type CategoryCardProps = {
  categoryId: number;
  categoryTitle: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryId,
  categoryTitle,
}) => {
  const queryClient = useQueryClient();

  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemContent, setItemContent] = useState<string>("");
  const Today = new Date();
  const [itemExpiredAt, setItemExpiredAt] = useState<Date>(Today);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
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
      setIsOpen(false);
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
    <CategoryCardContainer>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text isTruncated whiteSpace={"pre-wrap"}>
          {categoryTitle}
        </Text>
        <DeleteIcon
          boxSize={3.5}
          _hover={{ transform: "scale(1.2)" }}
          sx={{ cursor: "pointer", mx: 2, transition: "0.3s" }}
        />
      </Box>
      <Box my={3}>
        {data.map((item: ItemCardProps) => (
          <ItemCard key={item.id} title={item.title} />
        ))}
      </Box>
      {isOpen ? (
        <OpenAddItemArea
          title={"カードを追加"}
          placeholder={"カードのタイトルを入力"}
          contentPlaceholder={"カードの詳細を入力"}
          isItem
          date={itemExpiredAt}
          minDate={Today}
          setDate={setItemExpiredAt}
          onChangeTitle={(e) => setItemTitle(e.target.value)}
          onChangeContent={(e) => setItemContent(e.target.value)}
          onSave={handleSave}
          onClose={handleToggle}
        />
      ) : (
        <AddItemButtonBar title={"カードを追加"} onOpen={handleToggle} />
      )}
    </CategoryCardContainer>
  );
};

export default CategoryCard;
