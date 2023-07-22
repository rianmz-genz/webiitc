import Image from "next/image";
import React from "react";

const Logo = ({ children }) => {
  return (
    <Image
      className="w-20 p-2"
      src="/images/LOGO/LOGOFIX.png"
      width={1080}
      height={1080}
      alt="Logo IIT Competition"
    />
  );
};

export default Logo;
