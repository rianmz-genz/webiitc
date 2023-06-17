import React from 'react';
import HeroBackground from '@/components/atoms/HeroBackground';
import Text from '@/components/atoms/Text';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Navbar from './Navbar';
import Container from '@/components/molecules/Container';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 ">
        <div
          className=" w-full bg-cover  bg-no-repeat h-screen max-h-screen "
          style={{ backgroundImage: "url('/images/HeroImage.png')" }}
        />
      </div>
      <Container className="flex h-[90vh]  items-center justify-center">
        <Navbar />
        <Text
          size={'bigtitle'}
          weight={'bold'}
          color={'white'}
          additionals={'w-8/12 leading-relaxed text-center drop-shadow-xl'}
        >
          <span className="text-[#FFE600]"> Buktikan </span> bahwa kamu memiliki
          potensi emas dan <span className="text-[#FFA139]"> menangkan </span>{' '}
          event ini
        </Text>
      </Container>
    </section>
  );
};

export default HeroSection;
