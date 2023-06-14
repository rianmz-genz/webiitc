import Button from '@/components/atoms/Button'
import Countdown from '@/components/atoms/Countdown'
import FlashParagraph from '@/components/atoms/FlashParagraph'
import Text from '@/components/atoms/Text'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='min-h-screen w-full'>
        <div className='w-11/12 mx-auto flex items-center '>
            <article className='w-6/12 flex flex-col space-y-4 items-start justify-center'>
                <FlashParagraph 
                    isHorizontal={true}
                    value={"Show your skill to the world"}
                />
                <Text 
                    size={'mdtitle'}
                    additionals={'leading-relaxed'}
                    color={'dark'}
                    weight={'bold'}>
                        Tunjukan skillmu dan raih kemenangan mutlak !
                </Text>
                <Text color={'dark'}>Event ini di adakan untuk anak muda generasi Z  yang bersaing secara sportif dan juga penuh semangat, penilaian dalam event ini sepenuhnya dilakukan secara adil dan profesional.</Text>
                <Countdown />
                <Button size={'lg'}>Daftar Sekarang</Button>
            </article>
            <Image 
                src={'/images/showofFix.png'} 
                alt='Gambar Tunjukan Skill' 
                width={1080} 
                height={1080} 
                className='w-6/12'/>
        </div>
    </section>
  )
}

export default AboutSection
