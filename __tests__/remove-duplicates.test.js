const removeDuplicates = require('../katas/remove-duplicates.js');

describe('tests for removeDuplicates', () => {
  test('should leave unchanged for no duplicates', () => {
    expect(removeDuplicates([0, 1, 3])).toEqual([0, 1, 3]);
  });
  test('should remove one duplicate', () => {
    expect(removeDuplicates([0, 3, 5, 3, 7])).toEqual([0, 3, 5, 7]);
  });
  test('should remove multiple duplicates', () => {
    expect(removeDuplicates([0, 3, 5, 3, 7, 3, 5])).toEqual([0, 3, 5, 7]);
  });
});
