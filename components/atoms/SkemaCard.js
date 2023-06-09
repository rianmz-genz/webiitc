import React from 'react';
import Text from './Text';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

const SkemaCard = ({ imgUrl, title, description, buttonHref, buttonValue }) => {
  return (
    <li className="w-full hover:bg-white border border-slate-300 md:border-none hover:shadow-2xl transition-all duration-700 p-4 rounded-xl flex flex-col justify-between">
      <Image
        className="w-3/12 ml-3 drop-shadow-2xl"
        src={imgUrl}
        alt={`Image ${title}`}
        width={1080}
        height={1080}
      />

      <div className="lg:my-6 md:my-2 ">
        <Text
          size={'description'}
          weight={'bold'}
          additionals={
            'md:text-xs  lg:text-md flex items-start justify-start bg-red-500'
          }
        >
          {title}
        </Text>
        <Text size={'small'}>{description}</Text>
      </div>
      <div className="">
        <Link href={buttonHref}>
          <Button color={'orentransparent'}>{buttonValue}</Button>
        </Link>
      </div>
    </li>
  );
};

export default SkemaCard;
