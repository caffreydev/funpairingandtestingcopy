const getCentury = require('../katas/get-century.js');

describe('tests for get-century', () => {
  test('years less than 1000 should return correct', () => {
    expect(getCentury(100)).toBe('2nd');
    expect(getCentury(54)).toBe('1st');
    expect(getCentury(854)).toBe('9th');
    expect(getCentury(152)).toBe('2nd');
  });

  test('years more than 1000 should return correct', () => {
    expect(getCentury(2023)).toBe('21st');
    expect(getCentury(1066)).toBe('11th');
    expect(getCentury(5017)).toBe('51st');
    expect(getCentury(1936)).toBe('20th');
  });
});
