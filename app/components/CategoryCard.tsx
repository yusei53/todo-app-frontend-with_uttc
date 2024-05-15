import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { CategoryProps } from "../types/type";

type categoryCardProps = Pick<CategoryProps, "title">;

const CategoryCard: React.FC<categoryCardProps> = ({ title }) => {
  return (
    <Box
      w={{
        base: "50%",
        md: "40%",
        lg: "25%",
      }}
      bgColor={"#EBECF0"}
      borderRadius={3}
      mx={5}
      p={2}
      position={"relative"}
    >
      <Box display={"flex"}>
        <Text pr={222}>{title}</Text>
        <Box display={"flex"} alignItems={"center"}>
          <DeleteIcon
            sx={{ cursor: "pointer", position: "absolute", right: 4 }}
          />
        </Box>
      </Box>
      <Text>新しくタスクを追加</Text>
    </Box>
  );
};

export default CategoryCard;
