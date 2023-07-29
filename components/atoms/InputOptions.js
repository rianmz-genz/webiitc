import React from "react";
import Text from "./Text";

function InputOptions({ options }) {
  return (
    <div>
      <Text>Jenjang Pendidikan</Text>
      <select className="mt-1.5 w-full py-3 px-2  border-gray-300 text-gray-700 sm:text-sm border border-gray-400/40 rounded-md active:outline-none focus:outline-none">
        {/* <option value={""}>Pilih jenjang pendidikan</option> */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputOptions;
