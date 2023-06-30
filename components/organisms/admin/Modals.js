import Button from "@/components/atoms/Button";
import { Input } from "postcss";
import React from "react";

const Modals = ({ children, isModal, onSubmit }) => {
  return (
    <div
      className={`${
        isModal ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-300 w-full h-screen fixed bg-black/5 backdrop-blur-sm z-50 flex justify-center items-center`}
    >
      <form
        onSubmit={onSubmit}
        className="w-11/12 lg:w-full max-w-[500px] bg-white px-8 py-4 rounded-md"
      >
        {children}
      </form>
    </div>
  );
};

export default Modals;
