import React, { forwardRef } from "react";
import { CalendarIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Textarea,
  ButtonGroup,
  Button,
  IconButton,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 日本語ロケールを登録
type TProps = {
  placeholder: string;
  title: string;
  isItem?: boolean;
  date?: Date;
  minDate?: Date;
  setDate?: (date: Date) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSave: () => void;
  onClose: () => void;
};

type CustomInputProps = {
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const TextAreaButtonGroup: React.FC<TProps> = React.memo(
  ({
    placeholder,
    title,
    isItem,
    date,
    minDate,
    setDate,
    onChange,
    onSave,
    onClose,
  }) => {
    const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
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
          mt={2}
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

    CustomInput.displayName = "CustomInput";

    return (
      <>
        <Textarea
          placeholder={placeholder}
          bg={"white"}
          size={"sm"}
          boxShadow={"0 0 2px gray"}
          rows={2}
          borderRadius={5}
          onChange={(e) => onChange(e)}
        />
        {isItem && minDate && setDate && (
          <DatePicker
            locale="ja"
            dateFormat="yyyy/MM/dd"
            selected={date}
            minDate={minDate}
            onChange={(date) => setDate(date as Date)}
            customInput={<CustomInput value={date?.toLocaleDateString()} />}
          />
        )}
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
      </>
    );
  }
);

TextAreaButtonGroup.displayName = "TextAreaButtonGroup";

export default TextAreaButtonGroup;
