import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Link from "next/link";
import ArchiveModal from "../common/ArchiveModal";

type TProps = {
  id: number;
  title: string;
  handleDelete: () => void;
};

const BoardCard: React.FC<TProps> = ({ id, title, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteClick = () => {
    handleDelete();
    onClose();
  };

  return (
    <>
      <Link href={`/board/?id=${id}`}>
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
        </Box>
      </Link>
      <ArchiveModal
        boardTitle={title}
        isOpen={isOpen}
        onClose={onClose}
        onSave={handleDeleteClick}
      />
    </>
  );
};

export default BoardCard;
