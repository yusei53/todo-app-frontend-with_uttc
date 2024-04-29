import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BoardProps } from "../types/type";

type BoardTitle = Pick<BoardProps, "title">;

type TProps = {
  props: BoardTitle;
};

const CategoryCard: React.FC<TProps> = ({ props }) => {
  return (
    <Box bgColor={"#EBECF0"} borderRadius={3} mx={5} position={"relative"}>
      <Box display={"flex"} my={1} mx={4}>
        <Text pr={222}>{props.title}</Text>
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
