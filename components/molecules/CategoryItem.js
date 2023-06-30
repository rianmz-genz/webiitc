import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const CategoryItem = ({ name, onDelete, onEdit }) => {
  return (
    <li className="shadow shadow-black/5 rounded-md px-8 py-4 flex justify-between items-center">
      <p>{name}</p>
      <div className="flex items-center space-x-2">
        <button
          onClick={onEdit}
          title="edit"
          className="bg-green-400/20 p-1 rounded hover:scale-95 transition-all duration-300"
        >
          <AiOutlineEdit className="text-green-400" />
        </button>
        <button
          onClick={onDelete}
          title="hapus"
          className="bg-red/20 p-1 rounded hover:scale-95 transition-all duration-300"
        >
          <AiOutlineDelete className="text-red" />
        </button>
      </div>
    </li>
  );
};

export default CategoryItem;
