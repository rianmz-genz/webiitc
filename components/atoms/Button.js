import React from 'react'
import { variant } from '@/utils/utils';
const Button = ({ color, size, isSquare = false, ...props}) => {
    const button = variant(`${isSquare ? "rounded-md" : "rounded-full"}`, {
        color: {
          gradient: 'bg-gradient-to-r from-oren to-kuning text-white hover:scale-95',
          white: 'bg-white text-softyellow hover:bg-kuning hover:text-white',
          orentransparent: 'bg-oren/10 text-oren hover:shadow-lg',
          oren: 'bg-oren text-white hover:scale-95 ttransition-all duration-300'
        },
        size: {
          sm: 'px-5 py-1 text-sm',
          md: 'px-8 py-2 font-semibold',
          lg: 'px-10 py-3 text-lg font-bold',
        },
      });   
  return <button className={`transition-all duration-300 ${button({ color, size })}`} {...props} />;
}
Button.defaultProps = {
    color: 'gradient',
    size: 'md',
  };
export default Button
