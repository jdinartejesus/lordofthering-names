import uniqueRandomArray from 'unique-random-array'
const lordOfTheRingNames = require('./lordofthering-names.json')

const mainExport = {
  all: lordOfTheRingNames,
  random: uniqueRandomArray(lordOfTheRingNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
