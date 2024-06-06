import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BoardProps } from "../../types/type";
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
        transition={"0.3s"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={1}
        px={3}
        my={3}
        _hover={{ bg: "#6AA7E3" }}
      >
        <Text>{props.title}</Text>
        <DeleteIcon
          boxSize={3.5}
          _hover={{ transform: "scale(1.2)" }}
          sx={{ cursor: "pointer", mx: 1, transition: "0.3s" }}
        />
      </Box>
    </Link>
  );
};

export default BoardCard;
