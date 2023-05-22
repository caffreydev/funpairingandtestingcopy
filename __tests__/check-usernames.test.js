const checkUsernames = require('../katas/check-usernames.js');

describe('checkUsernames', () => {
  test('should take an array as input and return false if the username is not 5 characters long', () => {
    expect(checkUsernames(['joe1'])).toBe(false);
  });
  test('should return false if the username is longer than 20', () => {
    expect(checkUsernames(['abcdefghijklmnopqrstuvwxyz'])).toBe(false);
  });
  test('should return false if capital letters', () => {
    expect(checkUsernames(['Password', 'Joepass'])).toBe(false);
  });
  test('should return true if contains only lowercase letters', () => {
    expect(checkUsernames(['zenabh'])).toBe(true);
  });
  test('should return true if it contains only numbers', () => {
    expect(checkUsernames(['1234567'])).toBe(true);
  });

  test('should return true if it contains only underscores', () => {
    expect(checkUsernames(['________'])).toBe(true);
  });
  test('should return true if a normal password', () => {
    expect(checkUsernames(['joe_56'])).toBe(true);
  });
});
