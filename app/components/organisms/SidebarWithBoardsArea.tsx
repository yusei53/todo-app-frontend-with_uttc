import { Box, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BoardProps } from "../../types/type";
import CreateBoardModal from "../molecules/CreateBoardModal";
import BoardCard from "../molecules/BoardCard";

type TProps = {
  title: string;
  setNewBoardName: (value: string) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: BoardProps[];
  handleSave: () => void;
  handleDelete: (board_id: number) => void;
};

const SideBarWithBoardsArea: React.FC<TProps> = ({
  title,
  setNewBoardName,
  isOpen,
  onOpen,
  onClose,
  data,
  handleSave,
  handleDelete,
}) => {
  return (
    <Box
      height={"92vh"}
      minWidth={250}
      bg={"#496AAF"}
      p={5}
      boxShadow={"2px 2px 4px"}
      position={"sticky"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={5}
      >
        <Heading fontSize={17} color={"white"}>
          {title}
        </Heading>
        <AddIcon
          boxSize={3}
          color={"white"}
          onClick={onOpen}
          _hover={{ transform: "scale(1.3)" }}
          sx={{ cursor: "pointer", mx: 1, transition: "0.3s" }}
        />
      </Box>
      <CreateBoardModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={(e) => setNewBoardName(e.target.value)}
        onSave={handleSave}
      />
      {data.map((data: BoardProps) => (
        <BoardCard
          key={data.id}
          id={data.id}
          title={data.title}
          handleDelete={() => handleDelete(data.id)}
        />
      ))}
    </Box>
  );
};

export default SideBarWithBoardsArea;
