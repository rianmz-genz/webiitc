import ParagraphSection from '@/components/molecules/ParagraphSection'
import React from 'react'
import { AiOutlineBranches } from 'react-icons/ai'
const TimelineSection = () => {
  return (
    <section className='w-full py-12 flex flex-col items-center bg-darkblue'>
      <ParagraphSection
        isWhite={true} 
        flashValue={"Don't forget your misson"}
        title={"Timeline kami pada lomba ini"}
        description={"jangan sampai terlewat"}
      />
      <div className='my-12 w-11/12 bg-oren h-1'>
        <div className='w-full relative'>
          <span className='absolute -bottom-3 left-1/4 w-5 h-5 bg-darkblue border-4 rounded-full border-oren'>
         
          </span>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
