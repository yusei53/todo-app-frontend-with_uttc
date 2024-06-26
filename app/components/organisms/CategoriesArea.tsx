import { Box } from "@chakra-ui/react";
import CategoryCard from "../molecules/CategoryCard";
import { CategoryProps } from "../../types/type";
import AddButton from "../atom/AddButton";
import TextAreaButtonGroup from "../atom/TextAreaButtonGroup";
import CategoryCardContainer from "../atom/CategoryCardContainer";

type TProps = {
  categoryData: CategoryProps[];
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CategoriesArea: React.FC<TProps> = ({
  categoryData,
  isOpen,
  onChange,
  onSave,
  onClose,
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
            <TextAreaButtonGroup
              title={"リストを追加"}
              placeholder={"リストのタイトルを入力"}
              onChange={onChange}
              onSave={onSave}
              onClose={onClose}
            />
          </CategoryCardContainer>
        ) : (
          <AddButton
            title={"リストを追加"}
            bgColor={"rgba(255, 255, 255, 0.5)"}
            color={"white"}
            minWidth={272}
            sx={{ mx: 2, p: 4 }}
            onClose={onClose}
          />
        )}
      </Box>
    </Box>
  );
};

export default CategoriesArea;
