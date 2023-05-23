const sumArgs = require('../katas/sum-args.js');

describe('tests for sum args', () => {
  test('should return 0 if no arguments', () => {
    expect(sumArgs()).toBe(0);
  });
  test('should correctly sum 1 argument', () => {
    expect(sumArgs(8)).toBe(8);
  });
  test('should correctly sum 2 arguments', () => {
    expect(sumArgs(15, 22)).toBe(37);
  });
  test('should correctly sum 5 arguments', () => {
    expect(sumArgs(10, 35, 42, 7, 8)).toBe(102);
  });
});
