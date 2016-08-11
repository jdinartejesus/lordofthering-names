import {expect} from 'chai';
import lordOfTheRing from './index';

describe('lordOfTheRing', () => {
  it('should have a list of all available names', () => {
    expect(lordOfTheRing.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(lordOfTheRing.random()).to.satisfy(isIncludedIn(lordOfTheRing.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
