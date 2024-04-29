import { Box, Heading } from "@chakra-ui/react";
import BoardsArea from "./BoardsArea";

const SideBarWithBoardsArea = () => {
  return (
    <Box
      height={"92vh"}
      width={"20%"}
      bg={"#496AAF"}
      pt={5}
      boxShadow={"2px 2px 4px"}
      flex={"none"}
    >
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
