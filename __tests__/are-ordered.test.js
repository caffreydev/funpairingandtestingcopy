const areOrdered = require('../katas/are-ordered.js');

describe('tests for areOrdered', () => {
  test('empty array should return false', () => {
    expect(areOrdered([])).toBe(false);
  });
  test('sorted array should return true', () => {
    expect(areOrdered([1, 2, 3, 5, 10])).toBe(true);
  });
  test('unsorted array should return false', () => {
    expect(areOrdered([1, 2, 4, 3])).toBe(false);
  });
});
