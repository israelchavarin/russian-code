import { Flex, Text } from '@chakra-ui/react';

interface NumberDisplayerProps {
  number?: string;
}

const NumberDisplayer = ({ number = '' }: NumberDisplayerProps) => {
  return (
    <Flex
      bg='red.100'
      borderBottom='4px solid'
      borderColor='red.300'
      w='4rem'
      h='2rem'
      justify='center'
      align='center'
      boxShadow='inset 2px 2px 5px red.100, inset -2px -2px 5px red.200'
      borderRadius='md'
    >
      <Text
        fontWeight='bold'
        fontSize='lg'
        color='red.600'
        textShadow='inset 1px 1px 0 #fff, 1px 1px 2px rgba(0,0,0,0.1)'
        css={{
          textShadow: `
            1px 1px 0 #fff,
            -1px -1px 1px rgba(0, 0, 0, 0.1),
            inset 1px 1px 1px rgba(0,0,0,0.2)
          `,
        }}
      >
        {number}
      </Text>
    </Flex>
  );
};

export default NumberDisplayer;
