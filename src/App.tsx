import { Flex } from '@chakra-ui/react';
import DialPad from './components/DialPad';
import { useState } from 'react';
import NumberDisplayer from './components/NumberDisplayer';
import type { NumberObjet } from './interfaces';

const App = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<NumberObjet[]>([]);
  console.log('🚀 ~ App ~ enteredNumbers:', enteredNumbers);
  const numberValues = enteredNumbers.map(n => n.value);
  console.log('🚀 ~ App ~ numberValues:', numberValues);

  return (
    // main container
    <Flex
      flexDir='column'
      height='100dvh'
      width='24.375rem'
      mx='auto'
      bg='black'
    >
      {/* screen container */}
      <Flex flex={1} h='25rem' justify='space-between'>
        <NumberDisplayer number={enteredNumbers[0]?.text} />
        <NumberDisplayer number={enteredNumbers[1]?.text} />
        <NumberDisplayer number={enteredNumbers[2]?.text} />
        <NumberDisplayer number={enteredNumbers[3]?.text} />
        <NumberDisplayer number={enteredNumbers[4]?.text} />
        <NumberDisplayer number={enteredNumbers[5]?.text} />
      </Flex>

      {/* numbers container */}
      <Flex flex={1}>
        <DialPad setEnteredValues={setEnteredNumbers} />
      </Flex>
    </Flex>
  );
};

export default App;
