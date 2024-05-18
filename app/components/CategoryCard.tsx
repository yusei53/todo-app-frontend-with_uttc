import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { CategoryProps } from "../types/type";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../loading";

type categoryCardProps = Pick<CategoryProps, "id" | "title">;

const CategoryCard: React.FC<categoryCardProps> = ({ id, title }) => {
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
    <Box
      minWidth={272}
      bgColor={"#EBECF0"}
      borderRadius={12}
      mx={5}
      p={2}
      position={"relative"}
    >
      <Box display={"flex"}>
        <Text isTruncated whiteSpace={"pre-wrap"}>
          {title}
        </Text>
        <Box display={"flex"} alignItems={"center"}>
          <DeleteIcon
            sx={{ cursor: "pointer", position: "absolute", right: 4 }}
          />
        </Box>
      </Box>
      <Box my={3}>
        {data.map((itemData: categoryCardProps) => (
          <ItemCard key={itemData.id} title={itemData.title} />
        ))}
      </Box>
      <Text>新しくタスクを追加</Text>
    </Box>
  );
};

export default CategoryCard;
