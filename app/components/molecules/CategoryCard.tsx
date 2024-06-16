import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { CategoryProps } from "../../types/type";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../loading";
import { useCallback, useState } from "react";
import AddButton from "../atom/AddButton";
import CategoryCardContainer from "../atom/CategoryCardContainer";
import TextAreaButtonGroup from "../atom/TextAreaButtonGroup";

type categoryCardProps = Pick<CategoryProps, "id" | "title">;

const CategoryCard: React.FC<categoryCardProps> = ({ id, title }) => {
  const [isOepn, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["items", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8083/items?category_id=${id}`
      );
      return data;
    },
  });

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
      {isOepn ? (
        <TextAreaButtonGroup
          title={"カードを追加"}
          placeholder={"カードのタイトルを入力"}
          onChange={(e) => console.log(e)}
          onSave={() => console.log("save")}
          onClose={handleOpen}
        />
      ) : (
        <AddButton title={"カードを追加"} handleOpen={handleOpen} />
      )}
    </CategoryCardContainer>
  );
};

export default CategoryCard;
