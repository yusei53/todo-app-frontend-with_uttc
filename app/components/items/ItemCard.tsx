import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";

type TProps = {
  itemTitle: string;
  itemContent: string;
  expiredAt: string;
};

const ItemCard: React.FC<TProps> = ({ itemTitle, itemContent, expiredAt }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Accordion allowMultiple>
      <AccordionItem border={"none"}>
        <Box
          bgColor={"white"}
          boxShadow={"0 0 2px gray"}
          borderRadius={5}
          my={2}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AccordionButton
            py={1.5}
            justifyContent={"space-between"}
            _hover={{ bgColor: "none" }}
          >
            <Text isTruncated fontSize={14}>
              {itemTitle}
            </Text>
            {isHovered && <AccordionIcon />}
          </AccordionButton>
          <AccordionPanel py={0.5}>
            <Text whiteSpace={"pre-wrap"} fontSize={13}>
              {itemContent}
            </Text>
            <Text whiteSpace={"pre-wrap"} py={1} fontSize={13}>
              期限: {expiredAt}
            </Text>
          </AccordionPanel>
        </Box>
      </AccordionItem>
    </Accordion>
  );
};

export default ItemCard;
