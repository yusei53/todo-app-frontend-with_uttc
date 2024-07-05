import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Textarea, ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInputDatePicker from "../atom/CustomInputDatePicker";

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
            customInput={
              <CustomInputDatePicker value={date?.toLocaleDateString()} />
            }
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
