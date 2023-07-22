import React, { useState } from "react";
import TimelineModal from "./TimelineModal";
import { endDate, startDate } from "./timelineData";

function Circle({ date, currentPercentage, modalContent, importantDates }) {
  const percentage = Math.round(
    ((date - startDate) / (endDate - startDate)) * 100
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isFirstIndex = date === importantDates[0];
  const isAtLastIndex = date === importantDates[importantDates.length - 1];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`absolute flex  w-4 h-4 ${
        currentPercentage >= percentage - 1 ? "bg-oren" : "bg-slate-800"
      } rounded-full flex items-center justify-center`}
      style={{ left: `${percentage}%` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* circle inside */}
      <div className="w-2 h-2 rounded-full bg-slate-700"></div>

      {/* Tooltip */}
      <div className="relative">
        {(isHovered || isClicked) && (
          <TimelineModal
            className={`absolute mt-5 ${
              isAtLastIndex
                ? "right-[50%]"
                : "-left-32 right-0" && isFirstIndex
                ? "left-[50%]"
                : "-left-32 right-0"
            }`}
            importantDates={modalContent?.date}
            title={modalContent?.title}
            description={modalContent?.description}
          />
        )}
      </div>
    </div>
  );
}

export default Circle;
