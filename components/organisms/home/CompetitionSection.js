import Button from '@/components/atoms/Button'
import CompetitonCard from '@/components/atoms/CompetitonCard'
import Text from '@/components/atoms/Text'
import ParagraphSection from '@/components/molecules/ParagraphSection'
import Image from 'next/image'
import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
const CompetitionSection = () => {
  return (
    <section id='lomba' className='py-12 flex justify-center'>
      <div className='w-11/12 mx-auto'>
      <ParagraphSection 
        flashValue={'What is relevant to you?'} 
        title={'Pilih lomba yang relevant dengan kamu'} 
        description={'pilih lomba yang sesuai dengan kemampuan kamu ya..'}
        />
      <ol className='rounded-xl w-full mt-12 grid grid-cols-4 gap-3'>
        <CompetitonCard 
            category={'Pelajar & Mahasiswa'}
            imgSrc={'/images/kucing.png'}
            maxMembers={5}
            title={'Website Design'}
        />
        <CompetitonCard 
            category={'Pelajar & Mahasiswa'}
            imgSrc={'/images/gajah.png'}
            maxMembers={5}
            title={'Business Plan'}
        />
        <CompetitonCard 
            category={'Pelajar & Mahasiswa'}
            imgSrc={'/images/koala.png'}
            maxMembers={5}
            title={'E-Sport'}
        />
        <CompetitonCard 
            category={'Pelajar & Mahasiswa'}
            imgSrc={'/images/trex.png'}
            maxMembers={5}
            title={'Cover Music'}
        />
      </ol>
      </div>
    </section>
  )
}

export default CompetitionSection
