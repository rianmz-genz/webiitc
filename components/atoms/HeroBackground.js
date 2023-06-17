import Image from 'next/image';
import React from 'react';

const HeroBackground = () => {
  return (
    <Image
      height={1080}
      src={'/images/HeroImage.png'}
      width={1920}
      alt="Hero Background"
      className="absolute inset-0 top-0 left-0 object-contain object-center  "
    />
  );
};

export default HeroBackground;
