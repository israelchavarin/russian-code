// ConfettiBurst.jsx
import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiBurst({
  active = false,
  interval = 1000,
  duration = 5000,
}) {
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (active) {
      // Start confetti interval
      intervalRef.current = window.setInterval(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      }, interval);

      // Clear confetti after duration
      timeoutRef.current = window.setTimeout(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }, duration);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, interval, duration]);

  return null;
}
