import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const Alert = ({ children, isOpen, onClose }) => {
  return (
    <div className={`relative`}>
      <div
        className={`bg-white z-50 absolute px-4 py-2 top-2 lg:top-8 transition-all duration-300 rounded-md  flex gap-2 shadow-md items-center ${
          isOpen ? "lg:right-8 right-2 visible" : " invisible -right-full"
        }`}
      >
        {children}
        <FiX onClick={onClose} className="text-xl text-red" />
      </div>
    </div>
  );
};

export default Alert;
