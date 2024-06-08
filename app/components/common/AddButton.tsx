import { AddIcon } from "@chakra-ui/icons";
import { Button, SystemStyleObject } from "@chakra-ui/react";
import React from "react";

type TProps = {
  title: string;
  bgColor?: string;
  color?: string;
  minWidth?: number;
  sx?: SystemStyleObject;
  handleOpen: () => void;
};

const AddButton: React.FC<TProps> = React.memo(
  ({ title, bgColor = "transparent", color, minWidth, sx, handleOpen }) => {
    return (
      <Button
        width={"100%"}
        fontSize={"small"}
        size={"sm"}
        display={"flex"}
        justifyContent={"flex-start"}
        px={1.5}
        borderRadius={8}
        cursor={"pointer"}
        minWidth={minWidth}
        bgColor={bgColor}
        color={color}
        sx={sx}
        leftIcon={<AddIcon boxSize={2.5} />}
        _hover={{ bg: "#D9DBDF" }}
        onClick={handleOpen}
      >
        {title}
      </Button>
    );
  }
);

AddButton.displayName = "AddButton";

export default AddButton;
