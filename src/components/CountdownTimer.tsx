import { useState, useRef, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

interface CountdownTimerProps {
  seconds: number;
  isRunning: boolean;
  shouldStop?: boolean;
  onComplete?: () => void;
  onStop?: (remainingSeconds: number) => void;
}

const CountdownTimer = ({
  seconds,
  isRunning,
  shouldStop,
  onComplete,
  onStop,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<number | null>(null);
  const hasCompleted = useRef(false);

  // Start or Resume
  useEffect(() => {
    if (
      isRunning &&
      !shouldStop &&
      timeLeft > 0 &&
      intervalRef.current === null
    ) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          const nextTime = prev - 1;

          if (nextTime <= 0) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;

            if (!hasCompleted.current) {
              hasCompleted.current = true;
              onComplete?.();
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
  }, [isRunning, shouldStop, timeLeft, onComplete]);

  // Stop logic
  useEffect(() => {
    if (shouldStop && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      onStop?.(timeLeft);
    }
  }, [shouldStop, onStop, timeLeft]);

  // Reset completed state if countdown restarts
  useEffect(() => {
    if (!isRunning) {
      hasCompleted.current = false;
    }
  }, [isRunning]);

  // Format MM:SS
  const minutesDisplay = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secondsDisplay = String(timeLeft % 60).padStart(2, '0');

  return (
    <Text fontSize='4xl' fontWeight='bold' color='red'>
      {minutesDisplay}:{secondsDisplay}
    </Text>
  );
};

export default CountdownTimer;
