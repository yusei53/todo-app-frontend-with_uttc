import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button, SystemStyleObject } from "@chakra-ui/react";

type TProps = {
  title: string;
  bgColor?: string;
  color?: string;
  minWidth?: number;
  sx?: SystemStyleObject;
  onClose: () => void;
};

const AddButton: React.FC<TProps> = React.memo(
  ({ title, bgColor = "transparent", color, minWidth, sx, onClose }) => {
    return (
      <Button
        width={"100%"}
        fontSize={"small"}
        size={"sm"}
        display={"flex"}
        justifyContent={"flex-start"}
        cursor={"pointer"}
        px={1.5}
        borderRadius={12}
        minWidth={minWidth}
        bgColor={bgColor}
        color={color}
        sx={sx}
        leftIcon={<AddIcon boxSize={2.5} />}
        _hover={{ bg: "#D9DBDF" }}
        onClick={onClose}
      >
        {title}
      </Button>
    );
  }
);

AddButton.displayName = "AddButton";

export default AddButton;
