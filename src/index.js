import uniqueRandomArray from 'unique-random-array';
import lordOfTheRingNames from './lordofthering-names.json';

const getRandomItem = uniqueRandomArray(lordOfTheRingNames);

module.exports = {
  all: lordOfTheRingNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
