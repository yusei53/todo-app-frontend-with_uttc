import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const StandardCard = ({ children }: { children: ReactNode }) => {
  return (
    <Box minWidth={272} bgColor={"#EBECF0"} borderRadius={12} mx={2} p={2}>
      {children}
    </Box>
  );
};

export default StandardCard;
