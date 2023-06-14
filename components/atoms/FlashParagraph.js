import React from 'react'
import { RiFlashlightFill } from 'react-icons/ri'
const FlashParagraph = ({isHorizontal, value}) => {
  return (
    <div className={`${isHorizontal ? "flex space-x-2" : "flex flex-col justify-center"}`}>
        <RiFlashlightFill className='text-lg text-red' />
        <p className='font-semibold text-red'>{value}</p>
    </div>
  )
}

export default FlashParagraph
