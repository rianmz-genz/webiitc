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
          className=" w-full bg-cover  bg-no-repeat h-screen max-h-screen"
          style={{ backgroundImage: "url('/images/HeroImage.png')" }}
        />
      </div>
      <Container className="flex h-[90vh]  items-center justify-center">
        <Navbar />
        <Text
          size={'bigtitle'}
          weight={'bold'}
          color={'white'}
          additionals={
            'leading-relaxed text-center drop-shadow-xl md:text-7xl lg:text-4xl md:w-11/12 lg:w-8/12'
          }
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500 to bg-yellow-400">
            {' '}
            Buktikan{' '}
          </span>{' '}
          bahwa kamu memiliki potensi emas dan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500 to bg-yellow-400">
            {' '}
            menangkan{' '}
          </span>{' '}
          event ini
        </Text>
      </Container>
    </section>
  );
};

export default HeroSection;
