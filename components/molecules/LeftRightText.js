import React from "react";
import Text from "../atoms/Text";

const LeftRightText = ({ leftText, rightText }) => {
  return (
    <div className="flex my-1 justify-between md:w-6/12  space-x-1">
      <div className="w-1/2">
        <Text size={"description"}>{leftText}</Text>
      </div>
      <div className="flex justify-start w-full">
        <p className="mr-2">:</p>
        <Text size={"description"} color={"black"} weight={""}>
          {rightText}
        </Text>
      </div>
    </div>
  );
};

export default LeftRightText;
