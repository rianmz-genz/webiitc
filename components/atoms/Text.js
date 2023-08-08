import { variant } from "@/utils/utils";
import React from "react";

const Text = ({ color, additionals, weight, size, ...props }) => {
  const text = variant(`z-0 ${additionals}`, {
    color: {
      white: "text-white",
      dark: "text-black",
      gray: "text-black/70",
      red: "text-red",
      dark: "text-dark",
    },
    weight: {
      bold: "font-bold",
      semi: "font-semibold",
      normal: "font-normal",
    },
    size: {
      bigtitle: "text-5xl",
      mdtitle: "text-4xl",
      title: "text-3xl",
      cardtitle: "text-2xl",
      smalltitle: "text-xl",
      description: "text-lg",
      base: "text-base",
      small: "text-sm",
    },
  });
  return <div className={text({ color, weight, size })} {...props} />;
};
Text.defaultProps = {
  color: "dark",
  weight: "normal",
  size: "base",
};
export default Text;
