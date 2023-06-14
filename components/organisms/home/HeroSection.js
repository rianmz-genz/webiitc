import React from 'react'
import HeroBackground from '@/components/atoms/HeroBackground'
import Text from '@/components/atoms/Text'
import Link from 'next/link'
import Button from '@/components/atoms/Button'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section id="hero" className='w-full min-h-screen overflow-hidden relative flex justify-center items-center'>
      <HeroBackground />
      <Navbar />
      <Text 
        size={'bigtitle'} 
        weight={'bold'}
        color={'white'}
        additionals={'w-8/12 leading-relaxed text-center drop-shadow-xl'}> 
          <span className='text-[#FFE600]'> Buktikan </span> bahwa kamu memiliki potensi emas dan <span className='text-[#FFA139]'> menangkan </span> event ini
      </Text>
    </section>
  )
}

export default HeroSection
