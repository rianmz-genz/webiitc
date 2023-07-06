import Button from "@/components/atoms/Button";
import JuknisItem from "@/components/atoms/JukinisItem";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";

const DynamicInput = ({ array, setArray }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [percentage, setPercentage] = useState("");
  const handleAddJuknis = (e) => {
    e.preventDefault();
    const percentages = array.map((item, i) => item?.percentage);
    const totalPercentage = percentages.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    console.log(totalPercentage);
    const percentageInt = parseInt(percentage);
    if (
      isNaN(percentageInt) ||
      percentageInt > 100 ||
      totalPercentage + percentageInt > 100
    ) {
      return console.log(isNaN(percentageInt));
    }
    const data = {
      name: inputTitle,
      percentage: percentageInt,
    };
    setArray([...array, data]);
    setInputTitle("");
    setPercentage("");
  };
  const handleDelete = (index) => {
    const updatedInputs = [...array];
    updatedInputs.splice(index, 1);
    setArray(updatedInputs);
  };
  return (
    <div>
      <form onSubmit={handleAddJuknis} className="my-4 w-full">
        <div className="flex w-full justify-between items-center space-x-3 mb-2">
          <div className="w-full">
            <p>Juknis</p>
            <input
              required
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              className="border focus:outline-none px-3 py-1 mt-1 rounded-md w-full"
            />
          </div>
          <div className="w-12">
            <p>%</p>
            <input
              required
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="border w-full focus:outline-none py-1 px-2 mt-1 rounded-md"
            />
          </div>
        </div>
        <Button color={"blue"} size={"sm"} isSquare>
          Tambah
        </Button>
      </form>
      <hr></hr>
      <ul className="mt-2 space-y-1 w-full">
        {array?.map((item, index) => (
          <div key={index} className="flex items-center">
            <JuknisItem w={item?.percentage}>{item?.name}</JuknisItem>
            <FiTrash
              className="text-red cursor-pointer"
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DynamicInput;
