import { variant } from "@/utils/utils";
import React from "react";

const Input = ({ v, ...props }) => {
  const input = variant(
    "focus:outline-none rounded-md focus:ring-none px-4 py-2 w-full",
    {
      v: {
        base: "border border-gray-400/40",
      },
    }
  );
  return (
    <input
      className={`transition-all duration-300 ${input({ v })}`}
      {...props}
    />
  );
};
Input.defaultProps = {
  v: "base",
};

export default Input;
