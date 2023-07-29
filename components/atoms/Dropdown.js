import { useState, useEffect } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Text from "./Text";

const Dropdown = ({ options, title, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (id) => {
    //console.log(id);
    const selectOption = options.find((option) => option.id == id);
    setSelected(selectOption);
    //console.log(selected);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left rounded-md text-dark">
      <Text>{title}</Text>
      <button
        onClick={toggleDropdown}
        className="border w-full mt-1 px-2 py-2 rounded-t-md transition-all duration-300 flex justify-between items-center"
      >
        <p>{selected == null ? placeholder : selected.value} </p>

        <IoIosArrowDropdown
          className={`${
            isOpen ? "rotate-180" : ""
          } transition-all duration-300`}
        />
      </button>
      <ul
        className={`${
          isOpen ? "opacity-100 visible" : "invisible opacity-0"
        } bg-white transition-all duration-300 w-full rounded-b-md border absolute top-full left-0`}
      >
        {options?.map((option, index) => (
          <li className=" w-full border-b hover:bg-black/5" key={index}>
            <button
              className="px-2 py-1 w-full text-left"
              onClick={() => handleSelect(option.id)}
            >
              {option.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
