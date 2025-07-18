import { Box, Grid } from '@chakra-ui/react';
import NumberPronunciation from './NumberPronunciation';
import { numbers } from '../constants';
import type { NumberObjet } from '../interfaces';

interface DialPadProps {
  setEnteredValues: React.Dispatch<React.SetStateAction<NumberObjet[]>>;
}

const DialPad = ({ setEnteredValues }: DialPadProps) => {
  const handleClick = (number: NumberObjet) => {
    setEnteredValues((prevValues: NumberObjet[]) => [...prevValues, number]);
  };

  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap={4}
      maxW='300px'
      mx='auto'
      my='1rem'
    >
      {numbers.map(number =>
        number ? (
          <NumberPronunciation
            key={number.value}
            number={number}
            handleClick={handleClick}
          />
        ) : (
          <Box key={-1} />
        )
      )}
    </Grid>
  );
};

export default DialPad;
