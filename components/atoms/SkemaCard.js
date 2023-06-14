import React from 'react'
import Text from './Text'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'

const SkemaCard = ({imgUrl, title, description, buttonHref, buttonValue}) => {
  return (
    <li className='w-full hover:bg-white hover:shadow-2xl transition-all duration-700 p-4 rounded-xl'>
            <Image
                className='w-3/12 ml-3 drop-shadow-2xl' 
                src={imgUrl}
                alt={`Image ${title}`}
                width={1080}
                height={1080}
            />
            <div className='my-6'>
            <Text 
                size={'description'}
                weight={'bold'}
                >
                {title}
            </Text>
            <Text size={'small'}>{description}</Text>
            </div>
            <Link href={buttonHref}>
                <Button color={'orentransparent'}>{buttonValue}</Button>
            </Link>
        </li>
  )
}

export default SkemaCard
