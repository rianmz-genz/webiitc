import Image from 'next/image'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const SupportSection = () => {

  return (
    <div>
      <div className="flex gap-3 justify-center my-10 capitalize items-center">
      <AiFillHeart size={20} className='text-green-500'/>
      Supported by :
      </div>
      {/* swiper */}
      <div className="flex w-full p-5 justify-center items-center">
      <div className="flex w-full flex-wrap items-center justify-center lg:justify-evenly gap-3"> 
        <div className="w-32 h-10 relative py-5">
          <Image
            src={"/images/Sponsor/grab.png"}
            alt="grab"
            className='object-contain'
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-32 h-16 relative">
          <Image
            src={"/images/Sponsor/endra.png"}
            alt="endrapuri"
            layout="fill"
            className='object-contain'
            objectFit="contain"
          />
        </div>
        <div className="w-32 h-14 relative">
          <Image
            src={"/images/Sponsor/owb.png"}
            alt="owabong"
            layout="fill"
            className='object-contain'
            objectFit="contain"
          />
        </div>
        <div className="w-32 h-16 relative">
          <Image
            src={"/images/Sponsor/pusko.png"}
            alt="puskomedia"
            layout="fill"
            className='object-contain'
            objectFit="contain"
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default SupportSection
