import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        display={"flex"}
        background={"linear-gradient(to right, #00B5D8, #805AD5)"}
        as="header"
        padding={12}
        boxShadow={"0 7px 7px rgba(0, 0, 0, 0.05)"}
      >
        <Heading
          as="h1"
          fontSize={"25px"}
          color={"white"}
          fontWeight={"bold"}
          flexGrow={1}
        >
          Trelloクローン
        </Heading>
        <Text color={"white"} fontSize={"22px"} letterSpacing={"0.5px"} mx={20}>
          uttc × PeachTech
        </Text>
      </Box>
    </>
  );
};

export default Header;
