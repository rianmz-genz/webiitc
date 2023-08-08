import React from 'react';
import FlashParagraph from '../atoms/FlashParagraph';
import Text from '../atoms/Text';
import { motion } from 'framer-motion';
const ParagraphSection = ({
  flashValue,
  title,
  description,
  isWhite = false,
}) => {
  return (
    <motion.div
    whileInView={{ opacity: [0,1]}}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: .5 ,ease:"easeIn"}}
    className="flex flex-col lg:items-center lg:justify-center  space-y-3">
      <FlashParagraph
        isHorizontal={true}
        className="flex lg:flex-col md:text-md lg:text-lg"
        value={flashValue}
      />
      <Text
        additionals={'text-xl md:text-3xl lg:text-4xl'}
        size={'title'}
        color={isWhite ? 'white' : 'dark'}
        weight={'semi'}
      >
        {title}
      </Text>
      <Text color={isWhite ? 'white' : 'dark'}>{description}</Text>
    </motion.div>
  );
};

export default ParagraphSection;
