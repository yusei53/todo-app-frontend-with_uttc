import { CalendarIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { forwardRef } from "react";

type CustomInputProps = {
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const CustomInputDatePicker = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <InputGroup
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"0 0 2px gray"}
      borderRadius={5}
      size={"sm"}
      bg={"white"}
      cursor={"pointer"}
      onClick={onClick}
    >
      <Input
        borderRadius={5}
        cursor={"pointer"}
        value={value}
        ref={ref}
        readOnly
      />
      <InputRightElement height="100%">
        <CalendarIcon boxSize={3.5} aria-label={"calendar button"} />
      </InputRightElement>
    </InputGroup>
  )
);

CustomInputDatePicker.displayName = "CustomInputDatePicker";

export default CustomInputDatePicker;
