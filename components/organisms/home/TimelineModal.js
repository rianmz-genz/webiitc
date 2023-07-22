import React from "react";
import { BiGitBranch } from "react-icons/bi";

function TimelineModal({ className, title, description, importantDates }) {
  console.log(importantDates);
  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center justify-start bg-oren w-56 rounded-md overflow-hidden shadow-md">
        <div className="flex p-2 text-white gap-3">
          <div className="p-2 bg-slate-800 rounded-md h-fit">
            <BiGitBranch size={35} />
          </div>
          <div className="flex flex-col">
            <p className=" font-bold text-xs uppercase">{importantDates}</p>
            <p className=" font-bold text-xs uppercase">{title}</p>
            <p className="text-white text-xs ">{description}</p>
          </div>
        </div>
        <a
          href="#"
          className="w-full hover:bg-slate-900 p-2 bg-slate-800 transition-all duration-150 hover:text-white text-center text-slate-600"
        >
          cek lebih lanjut
        </a>
      </div>
    </div>
  );
}

export default TimelineModal;
