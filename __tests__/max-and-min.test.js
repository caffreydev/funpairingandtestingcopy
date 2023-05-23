const { max, min } = require('../katas/max-and-min.js');

describe('tests for max and min', () => {
  test('if empty array, max should return 0', () => {
    expect(max([])).toBe(0);
  });
  test('if empty array, min should return 0', () => {
    expect(min([])).toBe(0);
  });
  test('max should return largest value from an array', () => {
    expect(max([1, 5, 9, 8, -100, 1000])).toBe(1000);
  });
  test('min should return smallest value from an array', () => {
    expect(min([-50, 83, 217, -964])).toBe(-964);
  });
});
