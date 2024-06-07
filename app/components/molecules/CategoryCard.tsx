import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { CategoryProps } from "../../types/type";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../loading";
import { useCallback, useState } from "react";

type categoryCardProps = Pick<CategoryProps, "id" | "title">;

const CategoryCard: React.FC<categoryCardProps> = ({ id, title }) => {
  const [isOepn, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["items", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8083/items?category_id=${id}`
      );
      return data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <Box minWidth={272} bgColor={"#EBECF0"} borderRadius={12} mx={2} p={2}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text isTruncated whiteSpace={"pre-wrap"}>
          {title}
        </Text>
        <DeleteIcon
          boxSize={3.5}
          _hover={{ transform: "scale(1.2)" }}
          sx={{ cursor: "pointer", mx: 2, transition: "0.3s" }}
        />
      </Box>
      <Box my={3}>
        {data.map((itemData: categoryCardProps) => (
          <ItemCard key={itemData.id} title={itemData.title} />
        ))}
      </Box>
      {isOepn ? (
        <>
          <Textarea
            placeholder={"タイトルを入力"}
            rows={2}
            size={"sm"}
            borderRadius={5}
            bg={"white"}
            boxShadow={"0 0 2px gray"}
            mb={2}
          />
          <ButtonGroup size="xs" display={"flex"} alignItems={"center"}>
            <Button
              fontSize={"small"}
              bgColor={"#496AAF"}
              color={"white"}
              size={"sm"}
              _hover={{ bg: "#D9DBDF" }}
            >
              カードを追加
            </Button>
            <IconButton
              aria-label={"delete button"}
              boxSize={2.5}
              _hover={{ transform: "scale(1.3)" }}
              icon={<CloseIcon />}
              onClick={handleOpen}
            />
          </ButtonGroup>
        </>
      ) : (
        <Button
          width={"100%"}
          fontSize={"small"}
          bgColor={"transparent"}
          size={"sm"}
          px={1.5}
          display={"flex"}
          justifyContent={"flex-start"}
          leftIcon={
            <AddIcon boxSize={2.5} _hover={{ transform: "scale(1.3)" }} />
          }
          _hover={{ bg: "#D9DBDF" }}
          onClick={handleOpen}
        >
          カードを追加
        </Button>
      )}
    </Box>
  );
};

export default CategoryCard;
