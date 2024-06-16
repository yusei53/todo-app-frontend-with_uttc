import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Textarea, ButtonGroup, Button, IconButton } from "@chakra-ui/react";

type TProps = {
  placeholder: string;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSave: () => void;
  onClose: () => void;
};

const TextAreaButtonGroup: React.FC<TProps> = React.memo(
  ({ placeholder, title, onChange, onSave, onClose }) => {
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
          onChange={(e) => onChange(e)}
        />
        <ButtonGroup size={"xs"} display={"flex"} alignItems={"center"}>
          <Button
            size={"sm"}
            fontSize={"xs"}
            color={"white"}
            bgColor={"#496AAF"}
            _hover={{ bg: "#373D60" }}
            onClick={onSave}
          >
            {title}
          </Button>
          <IconButton
            boxSize={2}
            variant={"ghost"}
            aria-label={"delete button"}
            _hover={{ transform: "scale(1.2)" }}
            icon={<CloseIcon />}
            onClick={onClose}
          />
        </ButtonGroup>
      </>
    );
  }
);

TextAreaButtonGroup.displayName = "TextAreaButtonGroup";

export default TextAreaButtonGroup;
