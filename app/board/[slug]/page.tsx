"use client";
import { Box, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const BoardPage = () => {
  const Pathname = usePathname();
  return (
    <Box display={"flex"}>
      <Text>{Pathname}</Text>
    </Box>
  );
};

export default BoardPage;
