import React from "react";

const InputPhone = ({ ...props }) => {
  return (
    <div className="flex border border-gray-400/40 rounded-md">
      <p className="p-2 bg-silver/60 ">+62</p>
      <input
        type="text"
        className="bg-transparent focus:outline-none p-2 w-full"
        {...props}
      />
    </div>
  );
};

export default InputPhone;
