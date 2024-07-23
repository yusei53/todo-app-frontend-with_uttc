import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { CategoryProps } from "../../types/type";
import ItemCard from "../items/ItemCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../../loading";
import { useCallback, useState } from "react";
import CategoryCardContainer from "./CategoryCardContainer";
import { fetchItems } from "@/app/api/items/queryFn";
import AddItemButtonBar from "../items/AddItemButtonBar";
import OpenAddItemArea from "../items/OpenAddItemArea";

type categoryCardProps = Pick<CategoryProps, "id" | "title">;

const CategoryCard: React.FC<categoryCardProps> = ({ id, title }) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const Today = new Date();
  const [startDate, setStartDate] = useState(Today);

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["items", id],
    queryFn: () => fetchItems(id),
  });

  // const createMutation = useMutation({
  //   mutationFn: ({
  //     categoryId,
  //     itemTitle,
  //     itemContent,
  //     itemExpiredAt,
  //   }: {
  //     categoryId: number | null;
  //     itemTitle: string;
  //     itemContent: string;
  //     itemExpiredAt: Date;
  //   }) => createItems(categoryId, itemTitle, itemContent, itemExpiredAt),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["items", id] });
  //     setIsOpen(false);
  //   },
  // });

  // const handleSave = () => {
  //   createMutation.mutate({ categoryId: id, categoryTitle: newCategoryTitle });
  // };

  if (isLoading) return <Loading />;

  return (
    <CategoryCardContainer>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text isTruncated whiteSpace={"pre-wrap"}>
          {title}
        </Text>
        <DeleteIcon
          boxSize={3.5}
          _hover={{ transform: "scale(1.2)" }}
          sx={{ cursor: "pointer", mx: 2, transition: "0.3s" }}
        />
      </Box>
      <Box my={3}>
        {data.map((itemData: categoryCardProps) => (
          <ItemCard key={itemData.id} title={itemData.title} />
        ))}
      </Box>
      {isOpen ? (
        <OpenAddItemArea
          title={"カードを追加"}
          placeholder={"カードのタイトルを入力"}
          isItem
          date={startDate}
          minDate={Today}
          setDate={setStartDate}
          onChange={(e) => console.log(e)}
          onSave={() => console.log("save")}
          onClose={handleToggle}
        />
      ) : (
        <AddItemButtonBar title={"カードを追加"} onOpen={handleToggle} />
      )}
    </CategoryCardContainer>
  );
};

export default CategoryCard;
