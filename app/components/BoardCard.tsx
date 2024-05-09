import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BoardProps } from "../types/type";
import Link from "next/link";

type BoardTitle = Omit<BoardProps, "deleted">;

type TProps = {
  props: BoardTitle;
};

const BoardCard: React.FC<TProps> = ({ props }) => {
  return (
    <Link href={`/board/?id=${props.id}`}>
      <Box
        bg={"#EBECF0"}
        borderRadius={3}
        m={5}
        position={"relative"}
        transition={"0.3s"}
        _hover={{ bg: "#6AA7E3" }}
      >
        <Box display={"flex"} mx={2} py={1.5}>
          <Text>{props.title}</Text>
          <Box display={"flex"} alignItems={"center"}>
            <DeleteIcon
              sx={{ cursor: "pointer", position: "absolute", right: 4 }}
            />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default BoardCard;
