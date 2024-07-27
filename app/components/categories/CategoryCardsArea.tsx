import { Box } from "@chakra-ui/react";
import CategoryItemCardsContainer from "../items/CategoryItemCardsContainer";
import { CategoryProps } from "../../types/type";
import StandardCard from "../common/ StandardCard";
import AddItemButtonBar from "../items/AddItemButtonBar";
import OpenAddItemArea from "../items/OpenAddItemArea";

type TProps = {
  categories: CategoryProps[];
  isOpen: boolean;
  handleToggle: () => void;
  handleSave: () => void;
  handleDelete: (categoryId: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CategoriesArea: React.FC<TProps> = ({
  categories,
  isOpen,
  handleToggle,
  handleSave,
  handleDelete,
  handleChange,
}) => {
  return (
    <Box overflowX={"auto"} overflowY={"hidden"}>
      <Box
        pl={3}
        mt={10}
        overflowX={"auto"}
        display={"flex"}
        alignItems={"flex-start"}
        height={"100%"}
      >
        {categories.map((category) => (
          <CategoryItemCardsContainer
            key={category.id}
            categoryId={category.id}
            categoryTitle={category.title}
            handleDelete={() => handleDelete(category.id)}
          />
        ))}
        {isOpen ? (
          <StandardCard>
            <OpenAddItemArea
              title={"リストを追加"}
              placeholder={"リストのタイトルを入力"}
              onChangeTitle={handleChange}
              onSave={handleSave}
              onClose={handleToggle}
            />
          </StandardCard>
        ) : (
          <AddItemButtonBar
            title={"リストを追加"}
            bgColor={"rgba(255, 255, 255, 0.5)"}
            color={"white"}
            minWidth={272}
            sx={{ mx: 2, p: 4 }}
            onOpen={handleToggle}
          />
        )}
      </Box>
    </Box>
  );
};

export default CategoriesArea;
