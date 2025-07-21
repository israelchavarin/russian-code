import { Flex, Text } from '@chakra-ui/react';
import type { NumberObjet } from '../interfaces';

interface NumberPronunciationProps {
  number: NumberObjet;
  handleClick: (number: NumberObjet) => void;
}

const NumberPronunciation = ({
  number,
  handleClick,
}: NumberPronunciationProps) => {
  return (
    <Flex
      flexDir='column'
      p='1rem'
      border='1px solid red'
      borderRadius='md'
      bg='black'
      h='min-content'
      cursor='pointer'
      color='red'
      _hover={{
        bg: 'gray.800',
      }}
      _focus={{
        bg: 'gray.800',
      }}
      alignItems='center'
      onClick={() => handleClick(number)}
    >
      <Text fontSize='1rem' userSelect='none'>
        {number.text}
      </Text>
      {/* <Text fontSize='.875rem' userSelect='none'>
        ({number.pronunciation})
      </Text> */}
    </Flex>
  );
};

export default NumberPronunciation;
