import { Box, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import DeleteModal from "../common/DeleteModal";
import AddItemButtonBar from "../items/AddItemButtonBar";
import OpenAddItemArea from "../items/OpenAddItemArea";
import ItemCard from "../items/ItemCard";
import StandardCard from "../common/ StandardCard";
import { ItemProps } from "@/app/types/type";

type TProps = {
  categoryTitle: string;
  items: ItemProps[];
  isAddCardOpen: boolean;
  isOpen: boolean;
  itemExpiredAt: Date;
  Today: Date;
  onToggle: () => void;
  onSave: () => void;
  onCloseModal: () => void;
  onOpenModal: () => void;
  onDelete: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setItemExpiredAt: (date: Date) => void;
};

const CategoryItemCard: React.FC<TProps> = ({
  categoryTitle,
  items,
  isAddCardOpen,
  isOpen,
  itemExpiredAt,
  Today,
  onToggle,
  onSave,
  onCloseModal,
  onOpenModal,
  onDelete,
  onChangeTitle,
  onChangeContent,
  setItemExpiredAt,
}) => (
  <StandardCard>
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text isTruncated whiteSpace={"pre-wrap"}>
        {categoryTitle}
      </Text>
      <DeleteIcon
        boxSize={3.5}
        _hover={{ transform: "scale(1.2)" }}
        sx={{ cursor: "pointer", mx: 2, transition: "0.3s" }}
        onClick={onOpenModal}
      />
      <DeleteModal
        title={categoryTitle}
        isOpen={isOpen}
        onClose={onCloseModal}
        onClick={onDelete}
      />
    </Box>
    <Box my={3}>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          itemTitle={item.title}
          itemContent={item.content}
          expiredAt={item.expiredAt}
        />
      ))}
    </Box>
    {isAddCardOpen ? (
      <OpenAddItemArea
        title={"カードを追加"}
        placeholder={"カードのタイトルを入力"}
        contentPlaceholder={"カードの詳細を入力"}
        isItem
        date={itemExpiredAt}
        minDate={Today}
        setDate={setItemExpiredAt}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onSave={onSave}
        onClose={onToggle}
      />
    ) : (
      <AddItemButtonBar title={"カードを追加"} onOpen={onToggle} />
    )}
  </StandardCard>
);

export default CategoryItemCard;
