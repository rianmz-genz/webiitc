import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen' id='hero'>
        <Image 
          src={"/images/herobackground.png"} 
          width={1920} 
          height={1080}
          alt='Hero Background' 
          className='w-full object-contain' 
        />
      </section>
  )
}

export default HeroSection
