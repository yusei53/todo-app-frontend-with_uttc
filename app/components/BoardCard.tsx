import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BoardProps } from "../types/type";

type BoardTitle = Pick<BoardProps, "title">;

type TProps = {
  props: BoardTitle;
};

const BoardCard: React.FC<TProps> = ({ props }) => {
  return (
    <Box bgColor={"#EBECF0"} borderRadius={3} mt={20} mx={5}>
      <Box display={"flex"} my={1} mx={4}>
        <Text pr={250}>{props.title}</Text>
        <Box display={"flex"} alignItems={"center"}>
          <DeleteIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default BoardCard;