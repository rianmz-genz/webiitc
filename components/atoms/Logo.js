import Image from "next/image";
import React from "react";

const Logo = ({ children }) => {
  return (
    <Image
      className="w-36 p-2"
      src="/images/LOGO/LOGOFIX.svg"
      width={1080}
      height={1080}
      alt="Logo IIT Competition"
    />
  );
};

export default Logo;
