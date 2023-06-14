import React from 'react'
import { variant } from '@/utils/utils';
const Button = ({ color, size, ...props}) => {
    const button = variant('rounded-full', {
        color: {
          gradient: 'bg-gradient-to-r from-oren to-kuning text-white hover:scale-90',
          white: 'bg-white text-softyellow hover:bg-kuning hover:text-white',
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
