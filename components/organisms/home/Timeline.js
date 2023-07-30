import React, { useRef } from "react";
import Circle from "./Circle";
import timelineData, { endDate, startDate } from "./timelineData";
import FlashParagraph from "@/components/atoms/FlashParagraph";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Timeline = () => {
  const currentDate = new Date();
  const currentPercentage = Math.round(
    ((currentDate - startDate) / (endDate - startDate)) * 100
  );

  const { importantDates, modalContent } = timelineData;
  const timelineRef = useRef(null);

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft -= 100; // Adjust the number as needed
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft += 100; // Adjust the number as needed
    }
  };

  return (
    <div
      id="timeline"
      className={`p-10  bg-slate-700 min-h-screen flex   justify-center items-center flex-col w-full`}
    >
      <div className="flex flex-col gap-3 items-center text-center">
        <FlashParagraph value={"Don't forget your misson"} />
        <h1 className="font-semibold text-white text-3xl">
          Timeline kami dalam lomba ini
        </h1>
        <p className="text-slate-300">jangan sampai terlewat </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center hover:bg-slate-600 z-10 hover:text-white transition-all duration-200 ease-in"
        >
          <AiOutlineArrowLeft size={20} />
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center hover:bg-slate-600 z-10 hover:text-white transition-all duration-200 ease-in"
        >
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
      <div
        className={`w-full h-[300px] -mt-20 flex items-center overflow-x-scroll relative scroll-smooth scrollbar-hide `}
        ref={timelineRef}
      >
        <div className="w-[2000px]  bg-slate-800 h-1 absolute p-1"></div>
        {/* timeline terlewat */}
        <div
          className={`absolute  h-2 bg-oren`}
          style={{ width: `${currentPercentage}%` }}
        ></div>

        {importantDates.map((date, index) => (
          <Circle
            key={index}
            index={index}
            date={date}
            importantDates={importantDates}
            currentPercentage={currentPercentage}
            modalContent={modalContent[date.toISOString().slice(0, 10)]}
          />
        ))}
        {/* circle pada tanggal 10 */}
      </div>
    </div>
  );
};

export default Timeline;
