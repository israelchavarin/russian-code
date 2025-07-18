export const numbers = [
  { text: 'один', pronunciation: 'odin', value: 1 },
  { text: 'два', pronunciation: 'dva', value: 2 },
  { text: 'три', pronunciation: 'tri', value: 3 },
  { text: 'четыре', pronunciation: 'chetyre', value: 4 },
  { text: 'пять', pronunciation: 'pyat', value: 5 },
  { text: 'шесть', pronunciation: 'shest', value: 6 },
  { text: 'семь', pronunciation: 'sem', value: 7 },
  { text: 'восемь', pronunciation: 'vosem', value: 8 },
  { text: 'девять', pronunciation: 'devyat', value: 9 },
  null, // an empty cell
  { text: 'ноль', pronunciation: 'nol', value: 0 },
];

export const correctCombinations = [
  [5, 0, 7, 6, 9, 2],
  [2, 6, 1, 9, 5, 4],
  [7, 9, 2, 0, 6, 1],
  [3, 6, 1, 9, 4, 2],
  [1, 3, 9, 5, 0, 7],
];

export const correctCombination = [1, 0, 2, 9, 3, 8];

// import { useRef } from 'react';
// import { Howl } from 'howler';
// import two from './assets/audios/2-21-male-291.wav';
// import four from './assets/audios/4-23-male-9054.wav';
// import seven from './assets/audios/7-21-male-903.wav';

// const soundsRef = useRef<Howl[]>([]);

// const soundFiles = [two, four, seven];

// const preloadSounds = () => {
//   // Clear and reinitialize sounds
//   soundsRef.current = soundFiles.map(src => {
//     return new Howl({
//       src: [src],
//       preload: true,
//     });
//   });
// };

// const playSequentiallyWithPause = (index = 0) => {
//   if (index >= soundsRef.current.length) return;

//   const currentSound = soundsRef.current[index];
//   currentSound.play();

//   currentSound.once('end', () => {
//     setTimeout(() => {
//       playSequentiallyWithPause(index + 1);
//     }, 500); // 0.5s pause between sounds
//   });
// };

// const handleClick = () => {
//   // iOS Safari requires sounds to be loaded and triggered after user interaction
//   preloadSounds();
//   playSequentiallyWithPause(0);
// };
