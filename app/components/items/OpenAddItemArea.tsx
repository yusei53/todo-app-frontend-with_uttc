import React from "react";
import { Box, Textarea } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInputDatePicker from "./CustomInputDatePicker";
import OpenAddItemButtonGroup from "./OpenAddItemButtonGroup";

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

const OpenAddItemArea: React.FC<TProps> = React.memo(
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
      // Boxで囲むことで表示崩れを防ぐ
      <Box>
        <Textarea
          bg={"white"}
          size={"sm"}
          boxShadow={"0 0 2px gray"}
          rows={2}
          borderRadius={5}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
        {isItem && minDate && setDate && (
          <>
            <Textarea
              my={2}
              bg={"white"}
              size={"sm"}
              boxShadow={"0 0 2px gray"}
              rows={4}
              borderRadius={5}
              placeholder={placeholder}
              onChange={(e) => onChange(e)}
            />
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
          </>
        )}
        <OpenAddItemButtonGroup
          title={title}
          onSave={onSave}
          onClose={onClose}
        />
      </Box>
    );
  }
);

OpenAddItemArea.displayName = "OpenAddItemArea";

export default OpenAddItemArea;
