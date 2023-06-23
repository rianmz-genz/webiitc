import React, { useEffect, useState } from "react";
import Text from "./Text";

const JuknisItem = ({ w, children }) => {
  return (
    <li className="flex w-full">
      <Text additionals={"w-6/12"}>{children}</Text>
      <div className="flex w-6/12 items-center">
        <div className={`w-full h-3 mr-3 bg-silver/40 rounded-full flex`}>
          <div
            style={{ width: `${w}%` }}
            className={` bg-oren h-3 rounded-full`}
          ></div>
        </div>
        <Text color={"black"}>{w}%</Text>
      </div>
    </li>
  );
};

export default JuknisItem;
