import React from "react";
import Slider from "react-slick";
import { AiFillHeart } from "react-icons/ai";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SupportSection = () => {
  
      
        const settings = {
    dots: true,

      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
 
      autoplaySpeed: 3000,
      cssEase: "linear"
  };
  return (
    <div className="overflow-hidden">
      
      <h2 className="flex items-center justify-center my-10 gap-3"><AiFillHeart className="text-green-500" /> Support by : </h2>
     <div className="">
      <Slider {...settings} className="">
    <div className="">
    <img src="/images/Sponsor/grab.png" alt=""className="h-16 object-contain " />
    </div>
    <div className="">
    <img src="/images/Sponsor/pusko.png" alt=""className="h-16 object-contain" />
    </div>
    <div className="">
    <img src="/images/Sponsor/endra.png" alt=""className="h-16 object-contain   " />
    </div>
    <div className="">
    <img src="/images/Sponsor/owb.png" alt=""className="h-16 object-contain  " />
    </div>
      </Slider>
    </div>
    </div>
  );
}

  

export default SupportSection;
