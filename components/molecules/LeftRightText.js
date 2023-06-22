import React from 'react'
import Text from '../atoms/Text'

const LeftRightText = ({leftText, rightText}) => {
  return (
     <div className='flex my-1 space-x-1'>
        <Text size={'description'}>{ leftText}:</Text>
        <Text size={'description'} color={'black'} weight={'semi'}>{rightText}</Text>
    </div>
  )
}

export default LeftRightText
