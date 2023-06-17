import Button from '@/components/atoms/Button';
import Countdown from '@/components/atoms/Countdown';
import FlashParagraph from '@/components/atoms/FlashParagraph';
import { Container } from '../../../components';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className=" w-full">
      <Container>
        <div className="w-11/12 mx-auto flex items-center ">
          <article className="w-6/12 flex flex-col space-y-4 items-start justify-center">
            <div className="text-center w-full mt-10">
              <FlashParagraph
                isHorizontal={true}
                value={'Show your skill to the world'}
              />
            </div>
            <Text
              size={'mdtitle'}
              additionals={'leading-relaxed md:text-3xl lg:text-4xl'}
              color={'dark'}
              weight={'bold'}
            >
              Tunjukan skillmu dan raih kemenangan mutlak !
            </Text>
            <Text color={'dark'}>
              Event ini di adakan untuk anak muda generasi Z yang bersaing
              secara sportif dan juga penuh semangat, penilaian dalam event ini
              sepenuhnya dilakukan secara adil dan profesional.
            </Text>
            <Countdown />
            <Button size={'lg'}>Daftar Sekarang</Button>
          </article>
          <Image
            src={'/images/showofFix.png'}
            alt="Gambar Tunjukan Skill"
            width={1080}
            height={1080}
            className="w-6/12 md:object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
