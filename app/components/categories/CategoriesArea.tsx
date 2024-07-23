import { Box } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import { CategoryProps } from "../../types/type";
import CategoryCardContainer from "./CategoryCardContainer";
import AddItemButtonBar from "../items/AddItemButtonBar";
import OpenAddItemArea from "../items/OpenAddItemArea";

type TProps = {
  categoryData: CategoryProps[];
  isOpen: boolean;
  handleToggle: () => void;
  handleSave: () => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CategoriesArea: React.FC<TProps> = ({
  categoryData,
  isOpen,
  handleToggle,
  handleSave,
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
        {categoryData.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
          />
        ))}
        {isOpen ? (
          <CategoryCardContainer>
            <OpenAddItemArea
              title={"リストを追加"}
              placeholder={"リストのタイトルを入力"}
              onChange={handleChange}
              onSave={handleSave}
              onClose={handleToggle}
            />
          </CategoryCardContainer>
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
