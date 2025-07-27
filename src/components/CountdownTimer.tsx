import { useState, useRef, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

interface CountdownTimerProps {
  seconds: number;
  isRunning: boolean;
  onComplete?: () => void;
}

const CountdownTimer = ({
  seconds,
  isRunning,
  onComplete,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<number | null>(null);
  const hasCompleted = useRef(false);

  useEffect(() => {
    if (isRunning && timeLeft > 0 && intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          const nextTime = prev - 1;

          if (nextTime <= 0) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;

            if (!hasCompleted.current) {
              hasCompleted.current = true;
              onComplete?.(); // Call external function
            }

            return 0;
          }

          return nextTime;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, timeLeft, onComplete]);

  useEffect(() => {
    // Reset hasCompleted when timer is reset
    if (!isRunning) {
      hasCompleted.current = false;
      setTimeLeft(seconds);
    }
  }, [isRunning, seconds]);

  // Format MM:SS
  const minutesDisplay = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const secondsDisplay = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <Text fontSize='4xl' fontWeight='bold' color='red'>
      {minutesDisplay}:{secondsDisplay}
    </Text>
  );
};

export default CountdownTimer;
