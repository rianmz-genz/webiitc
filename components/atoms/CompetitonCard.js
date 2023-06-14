import Image from 'next/image'
import React from 'react'
import Text from './Text'
import { HiOutlineUsers } from 'react-icons/hi'
import Button from './Button'

const CompetitonCard = ({imgSrc, title, category, maxMembers}) => {
  return (
    <li className='rounded-xl w-full overflow-hidden shadow-lg'>
            <Image 
                className='w-full'
                src={imgSrc} 
                alt='Kucing' 
                width={1080} 
                height={1080}  
            />
            <div className='px-4 py-2 flex flex-col space-y-2'>
                <Text size={'cardtitle'} color={'dark'} weight={'semi'}>{title}</Text>
                <Text>{category}</Text>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-1'>
                    <HiOutlineUsers className='text-dark' />
                    <Text size={'small'}>{maxMembers} MAX</Text>
                    </div>
                    <Button>Detail</Button>
                </div>
            </div>
        </li>
  )
}

export default CompetitonCard
