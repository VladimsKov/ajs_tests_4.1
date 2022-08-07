// TODO: write your code here

import sum, { warriorHealth } from './basic';

// console.log('worked');
console.log(sum([1, 2]));

// homework

const warrior1 = {
  name: 'маг',
  health: '20',
};
const warrior2 = {
  name: 'воин',
  health: '55',
};
const warrior3 = {
  name: 'гном',
  health: '10',
};
console.log(`маг: ${warriorHealth(warrior1)}`);
console.log(`воин: ${warriorHealth(warrior2)}`);
console.log(`гном: ${warriorHealth(warrior3)}`);
