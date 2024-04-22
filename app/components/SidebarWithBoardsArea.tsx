import { Box, Heading } from "@chakra-ui/react";
import BoardsArea from "./BoardsArea";

const SideBarWithBoardsArea = () => {
  return (
    <Box height={"100vh"} width={"20%"} bg={"#373D69"} pt={5}>
      <Heading
        fontSize={20}
        display={"flex"}
        justifyContent={"center"}
        color={"white"}
      >
        ボード一覧
      </Heading>
      <BoardsArea />
    </Box>
  );
};

export default SideBarWithBoardsArea;
