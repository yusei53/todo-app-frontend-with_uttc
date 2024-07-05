import React from "react";
import { Textarea } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInputDatePicker from "../atom/CustomInputDatePicker";
import OpenAddItemButtonGroup from "../atom/OpenAddItemButtonGroup";

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
      <>
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
        <OpenAddItemButtonGroup
          title={title}
          onSave={onSave}
          onClose={onClose}
        />
      </>
    );
  }
);

OpenAddItemArea.displayName = "OpenAddItemArea";

export default OpenAddItemArea;
