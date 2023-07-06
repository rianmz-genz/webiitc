import Image from "next/image";
import { useState } from "react";

const FileInput = ({ image, setImage }) => {
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    console.log(event);
  };

  return (
    <div className="mb-4 mt-2">
      <input
        required
        type="file"
        className="hidden"
        id="file-input"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-input"
        className={`block ${
          !image && "p-4"
        } bg-white rounded-md cursor-pointer`}
      >
        {image ? (
          <Image
            className="w-full rounded-xl"
            width={1920}
            height={1080}
            src={URL.createObjectURL(image)}
            alt={`gambar -${image?.target?.value}`}
          />
        ) : (
          <p>Pilih file</p>
        )}
      </label>
    </div>
  );
};

export default FileInput;