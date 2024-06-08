import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Textarea, ButtonGroup, Button, IconButton } from "@chakra-ui/react";

type TProps = {
  placeholder: string;
  title: string;
  handleOpen: () => void;
};

const TextAreaButtonGroup: React.FC<TProps> = React.memo(
  ({ placeholder, title, handleOpen }) => {
    return (
      <>
        <Textarea
          placeholder={placeholder}
          bg={"white"}
          size={"sm"}
          boxShadow={"0 0 2px gray"}
          mb={2}
          rows={2}
          borderRadius={5}
        />
        <ButtonGroup size={"xs"} display={"flex"} alignItems={"center"}>
          <Button
            size={"sm"}
            fontSize={"xs"}
            color={"white"}
            bgColor={"#496AAF"}
            _hover={{ bg: "#373D60" }}
          >
            {title}
          </Button>
          <IconButton
            boxSize={2}
            variant={"ghost"}
            aria-label={"delete button"}
            _hover={{ transform: "scale(1.2)" }}
            icon={<CloseIcon />}
            onClick={handleOpen}
          />
        </ButtonGroup>
      </>
    );
  }
);

TextAreaButtonGroup.displayName = "TextAreaButtonGroup";

export default TextAreaButtonGroup;
