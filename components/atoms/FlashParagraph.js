import React from 'react'
import { RiFlashlightFill } from 'react-icons/ri'
const FlashParagraph = ({isHorizontal, value}) => {
  return (
    <div className={`${isHorizontal ? "flex space-x-2 items-center" : "flex flex-col items-center space-y-2"}`}>
        <RiFlashlightFill className='text-lg text-red' />
        <p className='font-semibold text-red'>{value}</p>
    </div>
  )
}

export default FlashParagraph
