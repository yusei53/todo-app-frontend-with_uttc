import { Box, Text } from "@chakra-ui/react";

const ItemCard = ({ title }: { title: string }) => {
  return (
    <Box bgColor={"white"} boxShadow={"0 0 2px gray"} borderRadius={5} my={2}>
      <Text isTruncated whiteSpace={"pre-wrap"} py={1} px={3} fontSize={14}>
        {title}
      </Text>
    </Box>
  );
};

export default ItemCard;
