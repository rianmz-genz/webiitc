import React from "react";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const InputTitle = ({ placeholder, title, ...props }) => {
  return (
    <div>
      <Text additionals={"mb-1"}>{title}</Text>
      <Input
        placeholder={placeholder ? placeholder : ""}
        v={"base"}
        {...props}
      />
    </div>
  );
};

export default InputTitle;
