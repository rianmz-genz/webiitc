import Image from "next/image";
import { useState } from "react";

const FileInput = ({
  image,
  setImage,
  className = "bg-white",
  placeholder = "Pilih file",
}) => {
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    //console.log(event);
  };

  return (
    <div className={` mb-4 mt-2 ring-1 rounded-xl ring-slate-300`}>
      <input
        type="file"
        className="hidden"
        id="file-input"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-input"
        className={`block ${
          !image && "p-4"
        } ${className}  rounded-md cursor-pointer`}
      >
        {image ? (
          <img
            className="w-full rounded-xl"
            width={1920}
            height={1080}
            src={typeof image == "string" ? image : URL.createObjectURL(image)}
            alt={`gambar -${image?.target?.value}`}
          />
        ) : (
          <p>{placeholder}</p>
        )}
      </label>
    </div>
  );
};

export default FileInput;
