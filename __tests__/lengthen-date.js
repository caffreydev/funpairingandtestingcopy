const lengthenDate = require('../katas/lengthen-date.js');

describe('tets for lengthenDate', () => {
  test('should return lengthened date', () => {
    expect(lengthenDate('21.03.2017')).toBe('Tuesday 21st March 2017');
  });
});
