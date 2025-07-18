import { Flex, Image, Text } from '@chakra-ui/react';
import DialPad from './components/DialPad';
import { useEffect, useState } from 'react';
import NumberDisplayer from './components/NumberDisplayer';
import type { NumberObjet } from './interfaces';
import { correctCombination } from './constants';
import peace from './assets/images/peace.gif';
import explosion from './assets/images/explosion.gif';

const App = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<NumberObjet[]>([]);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [result, setResult] = useState<'success' | 'failure' | ''>('');
  const numberValues = enteredNumbers.map(n => n.value);

  let redShadowToUse = '#FF6666';
  if (attemptNumber === 2) {
    redShadowToUse = '#FF3333';
  } else if (attemptNumber === 3) {
    redShadowToUse = '#FF0000';
  }

  const areArraysEqual = (a: number[], b: number[]) => {
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
  };

  useEffect(() => {
    if (numberValues.length === 6) {
      if (areArraysEqual(numberValues, correctCombination)) {
        setResult('success');
      } else {
        if (attemptNumber === 3) {
          setResult('failure');
        } else {
          setAttemptNumber(attemptNumber + 1);
          setEnteredNumbers([]);
        }
      }
    }
  }, [numberValues, attemptNumber]);

  return (
    // main container
    <Flex
      flexDir='column'
      height='100dvh'
      width='24.375rem'
      mx='auto'
      bg='black'
    >
      {result === 'success' && <Image src={peace} />}

      {result === 'failure' && <Image src={explosion} />}

      {!result && (
        <>
          {/* screen container */}
          <Flex
            flexDir='column'
            flex={1}
            h='25rem'
            align='center'
            rowGap='1rem'
            py='1rem'
          >
            <Text fontSize='2rem' fontWeight='bold' color={redShadowToUse}>
              {attemptNumber === 3
                ? 'Последняя попытка'
                : `Попытка ${attemptNumber}`}
            </Text>

            <Flex columnGap='1rem'>
              <NumberDisplayer number={enteredNumbers[0]?.text} />
              <NumberDisplayer number={enteredNumbers[1]?.text} />
              <NumberDisplayer number={enteredNumbers[2]?.text} />
            </Flex>

            <Flex columnGap='1rem'>
              <NumberDisplayer number={enteredNumbers[3]?.text} />
              <NumberDisplayer number={enteredNumbers[4]?.text} />
              <NumberDisplayer number={enteredNumbers[5]?.text} />
            </Flex>
          </Flex>

          {/* numbers container */}
          <Flex flex={1}>
            <DialPad setEnteredValues={setEnteredNumbers} />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default App;
