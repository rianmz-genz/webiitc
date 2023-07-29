import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const InputPhotoIdentity = ({ photo, setPhoto, initialPhotoUrl }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        console.log("File MIME Type: ", file.type);
      });
      // Check if the dropped item is a File object and has a type that starts with 'image/'
      if (
        acceptedFiles[0] instanceof File &&
        acceptedFiles[0].type.startsWith("image/")
      ) {
        setPhoto(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );
      } else {
        console.warn("Invalid file type. Please upload an image file.");
      }
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    if (photo) {
      URL.revokeObjectURL(photo.preview);
    }
  }, [photo]);

  return (
    <div
      {...getRootProps()}
      className="px-3 py-2 border rounded-lg w-full flex flex-col  items-center gap-2 cursor-pointer hover:bg-gray-100"
    >
      <input {...getInputProps()} />
      <p className="text-start">
        {isDragActive ? <span>Letakan disini</span> : <span>Pilih File</span>}
      </p>
      {!photo && initialPhotoUrl && (
        <img
          src={initialPhotoUrl}
          className="h-24 w-auto"
          alt="Initial Preview"
        />
      )}
      {photo && (
        <img src={photo.preview} className="h-24 w-auto" alt="New Preview" />
      )}
    </div>
  );
};

export default InputPhotoIdentity;
