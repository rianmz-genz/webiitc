import React from 'react'
import FlashParagraph from '../atoms/FlashParagraph'
import Text from '../atoms/Text'

const ParagraphSection = ({flashValue, title, description}) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-3'>
      <FlashParagraph value={flashValue} />
      <Text size={'title'} color={'dark'} weight={'semi'}>{title}</Text>
      <Text>{description}</Text>
    </div>
  )
}

export default ParagraphSection
