import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Link from "next/link";
import DeleteModal from "../common/DeleteModal";

type TProps = {
  id: number;
  title: string;
  onDelete: () => void;
};

const BoardCard: React.FC<TProps> = ({ id, title, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <>
      <Link href={`/todo-area/?id=${id}`}>
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
          <Text>{title}</Text>
          <DeleteIcon
            boxSize={3.5}
            _hover={{ transform: "scale(1.2)" }}
            sx={{ cursor: "pointer", mx: 1, transition: "0.3s" }}
            onClick={onOpen}
          />
          <DeleteModal
            title={title}
            isOpen={isOpen}
            onClose={onClose}
            onClick={handleDelete}
          />
        </Box>
      </Link>
    </>
  );
};

export default BoardCard;
