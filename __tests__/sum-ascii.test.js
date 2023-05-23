const sumAscii = require('../katas/sum-ascii.js');

describe('tests for sumAscii', () => {
  test('should return name in an array of length 1', () => {
    expect(sumAscii(['joe'])).toBe('joe');
  });
  test('should return correct name from longer array', () => {
    expect(sumAscii(['joe', 'joseph', 'a'])).toBe('joseph');
  });
  test('should return correct name from longer array with repeats', () => {
    expect(sumAscii(['joe', 'joe', 'zenab', 'a'])).toBe('zenab');
  });
});
