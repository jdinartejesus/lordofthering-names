import {expect} from 'chai';
import lordOfTheRing from './index';

describe('lordOfTheRing-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(lordOfTheRing.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Adrahil`', function() {
      expect(lordOfTheRing.all).to.include('Adrahil');
    });
  });

  describe('random', function() {
    it('should return a random item from the lordOfTheRing.all', function() {
      var randomItem = lordOfTheRing.random();
      expect(lordOfTheRing.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = lordOfTheRing.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(lordOfTheRing.all).to.include(item);
      });
    });
  });
});
