import React, { useState } from "react";
import Text from "./Text";
import { FiPlus, FiX } from "react-icons/fi";

const FaqCard = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="rounded-lg border border-black/10 p-4 transition-all duration-300">
      <div className="flex justify-between">
        <Text
          size={"base"}
          weight={"bold"}
          additionals={"md:text-sm lg:text-md"}
        >
          {question}
        </Text>
        <div onClick={() => setIsOpened(!isOpened)}>
          <FiPlus
            className={`${
              isOpened ? "rotate-45" : "rotate-0"
            } text-lg tex-dark transition-all duration-300 cursor-default lg:cursor-pointer`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpened
            ? "h-fit visible opacity-100 mt-2"
            : "h-0 invisible opacity-0"
        } transition-all duration-300`}
      >
        <Text size={"small"}>{answer}</Text>
      </div>
    </div>
  );
};

export default FaqCard;
