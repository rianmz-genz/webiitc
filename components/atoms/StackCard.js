import React from 'react'
import Text from './Text'
import { AiFillCheckCircle } from 'react-icons/ai'

const StackCard = ({children}) => {
  return (
    <li className='shadow-blue-400/40 shadow-md px-4 py-2 flex space-x-2 items-center'>
        <Text weight={'semi'}>{children}</Text>
        <AiFillCheckCircle className='text-blue-400' />
    </li>
  )
}

export default StackCard
