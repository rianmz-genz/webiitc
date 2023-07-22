import React from "react";
import Circle from "./Circle";
import timelineData, { endDate, startDate } from "./timelineData";
import FlashParagraph from "@/components/atoms/FlashParagraph";

const Timeline = () => {
  const currentDate = new Date();
  const currentPercentage = Math.round(
    ((currentDate - startDate) / (endDate - startDate)) * 100
  );
  // console.log(currentDate.getDate(), startDate.getDate());
  const { importantDates, modalContent } = timelineData;

  return (
    <div
      className={`p-10  bg-slate-700 min-h-screen flex justify-center items-center flex-col w-full`}
    >
      <div className="flex flex-col gap-3 items-center text-center">
        <FlashParagraph value={"Don't forget your misson"} />
        <h1 className="font-semibold text-white text-3xl">
          Timeline kami dalam lomba ini
        </h1>
        <p className="text-slate-300">jangan sampai terlewat </p>
      </div>
      <div className="flex justify-center items-center mt-12 w-full">
        {/* timeline line */}
        <div className="w-full bg-slate-800 flex items-center relative">
          {/* timeline terlewat */}
          <div
            className={`p-[3px] bg-oren`}
            style={{ width: `${currentPercentage + 1}%` }}
          ></div>

          {/* circle pada tanggal 10 */}
          <Circle
            date={importantDates[0]}
            currentPercentage={currentPercentage}
            modalContent={
              modalContent[importantDates[0].toISOString().slice(0, 10)]
            }
            importantDates={importantDates}
          />

          {/* circle pada tanggal 20 */}
          <Circle
            date={importantDates[1]}
            currentPercentage={currentPercentage}
            modalContent={
              modalContent[importantDates[1].toISOString().slice(0, 10)]
            }
            importantDates={importantDates}
          />

          {/* circle pada tanggal 30 */}
          <Circle
            date={importantDates[2]}
            currentPercentage={currentPercentage}
            modalContent={
              modalContent[importantDates[2].toISOString().slice(0, 10)]
            }
            importantDates={importantDates}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
