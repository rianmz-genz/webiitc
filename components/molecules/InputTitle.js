import React from "react";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const InputTitle = ({ title, ...props }) => {
  return (
    <div>
      <Text additionals={"mb-1"}>{title}</Text>
      <Input v={"base"} {...props} />
    </div>
  );
};

export default InputTitle;
