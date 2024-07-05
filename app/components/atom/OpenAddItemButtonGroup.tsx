import { CloseIcon } from "@chakra-ui/icons";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";

type TProps = {
  title: string;
  onSave: () => void;
  onClose: () => void;
};

const OpenAddItemButtonGroup: React.FC<TProps> = ({
  title,
  onSave,
  onClose,
}) => {
  return (
    <ButtonGroup size={"xs"} display={"flex"} alignItems={"center"} mt={2}>
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
  );
};

export default OpenAddItemButtonGroup;
