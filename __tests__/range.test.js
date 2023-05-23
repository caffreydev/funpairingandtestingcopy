const range = require('../katas/range.js');

describe('tests for range', () => {
  test('should count from 0 if only length specified', () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });
  test('should count from start val if only length and start specified', () => {
    expect(range(5, 5)).toEqual([5, 6, 7, 8, 9]);
  });
  test('should count from start val in steps of size stepval if length, start, and stepval specified', () => {
    expect(range(5, 5)).toEqual([5, 6, 7, 8, 9]);
  });
});
