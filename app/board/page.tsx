"use client";
import { Box, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

const BoardPage = () => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("id");

  return (
    <Box display={"flex"}>
      <Text>{categoryName}</Text>
    </Box>
  );
};

export default BoardPage;
