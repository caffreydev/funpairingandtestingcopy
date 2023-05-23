const getDistinctLetters = require('../katas/get-distinct-letters.js');

describe('tests for getdistinctletters', () => {
  test("should return all letters when strings don't overlap", () => {
    expect(getDistinctLetters('hat', 'dog')).toBe('adghot');
  });
  test('should return unique letters when duplicates in only one string', () => {
    expect(getDistinctLetters('aardvark', 'eel')).toBe('dklv');
  });
  test('should return unique letters when duplicates between strings', () => {
    expect(getDistinctLetters('fix', 'fog')).toBe('giox');
  });
});
