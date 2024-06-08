import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        display={"flex"}
        background={"linear-gradient(to right, #00B5D8, #805AD5)"}
        as="header"
        padding={3}
        boxShadow={"0 7px 7px rgba(0, 0, 0, 0.05)"}
      >
        <Heading
          display={"flex"}
          alignItems={"center"}
          as="h1"
          fontSize={"22px"}
          color={"white"}
          fontWeight={"bold"}
          flexGrow={1}
        >
          Trelloクローン
        </Heading>
        <Text color={"white"} fontSize={"22px"} letterSpacing={"0.5px"} mx={6}>
          uttc × PeachTech
        </Text>
      </Box>
    </>
  );
};

export default Header;
