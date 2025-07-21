import { useRef } from 'react';
import { Image } from '@chakra-ui/react';
import { Howl } from 'howler';
import cassette from '../assets/images/cassette.png';

interface SoundsPlayerProps {
  audioFiles: string[];
}

const SoundsPlayer = ({ audioFiles }: SoundsPlayerProps) => {
  const soundsRef = useRef<Howl[]>([]);

  const stopAndUnloadSounds = () => {
    // Stop and unload any existing sounds
    soundsRef.current.forEach(sound => {
      sound.stop();
      sound.unload();
    });
    soundsRef.current = [];
  };

  const preloadSounds = () => {
    soundsRef.current = audioFiles.map(src => {
      return new Howl({
        src: [src],
        preload: true,
      });
    });
  };

  const playSequentiallyWithPause = (index = 0) => {
    if (index >= soundsRef.current.length) return;

    const currentSound = soundsRef.current[index];
    currentSound.play();

    currentSound.once('end', () => {
      setTimeout(() => {
        playSequentiallyWithPause(index + 1);
      }, 700); // pause between sounds
    });
  };

  const handleClick = () => {
    stopAndUnloadSounds(); // 🔁 stop any previous sounds
    preloadSounds(); // 📦 preload fresh
    playSequentiallyWithPause(); // ▶️ start from beginning
  };

  return (
    <Image
      mt='1rem'
      src={cassette}
      w='6rem'
      cursor='pointer'
      onClick={handleClick}
    />
  );
};

export default SoundsPlayer;
