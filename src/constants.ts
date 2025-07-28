import zero from './assets/audios/0-21-male-15.wav';
import one from './assets/audios/1-21-male-129.wav';
import two from './assets/audios/2-21-male-291.wav';
import three from './assets/audios/3-21-male-434.wav';
import four from './assets/audios/4-21-male-552.wav';
import five from './assets/audios/5-21-male-8178.wav';
import six from './assets/audios/6-21-male-786.wav';
import seven from './assets/audios/7-21-male-944.wav';
import eight from './assets/audios/8-21-male-1024.wav';
import nine from './assets/audios/9-21-male-1177.wav';

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
  [
    { audio: five, value: 5 },
    { audio: zero, value: 0 },
    { audio: seven, value: 7 },
    { audio: six, value: 6 },
    { audio: nine, value: 9 },
    { audio: two, value: 2 },
  ],
  [
    { audio: two, value: 2 },
    { audio: six, value: 6 },
    { audio: one, value: 1 },
    { audio: nine, value: 9 },
    { audio: five, value: 5 },
    { audio: four, value: 4 },
  ],
  [
    { audio: seven, value: 7 },
    { audio: nine, value: 9 },
    { audio: two, value: 2 },
    { audio: zero, value: 0 },
    { audio: six, value: 6 },
    { audio: one, value: 1 },
  ],
  [
    { audio: three, value: 3 },
    { audio: six, value: 6 },
    { audio: one, value: 1 },
    { audio: nine, value: 9 },
    { audio: four, value: 4 },
    { audio: eight, value: 8 },
  ],
  [
    { audio: one, value: 1 },
    { audio: three, value: 3 },
    { audio: nine, value: 9 },
    { audio: five, value: 5 },
    { audio: zero, value: 0 },
    { audio: seven, value: 7 },
  ],
];

export const correctCombination = [1, 0, 2, 9, 3, 8];
