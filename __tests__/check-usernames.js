const checkUsernames = require("../katas/check-usernames.js");

describe("checkUsernames", () => {
    test("should take an array as input and return false if the username is not 5 characters long", () => {
        expect(checkUsernames(['joe1'])).toBe(false);
    });
    test("should return false if the username is longer than 20", () => {
        expect(checkUsernames(['abcdefghijklmnopqrstuvwxyz'])).toBe(false);
    })
    test.only("should return false if it does not only contain lowercase letters", () => {
        expect(checkUsernames(['zenabh'])).toBe(true);
       
    })
    test.only("should return false if it does not only contain numbers", () => {
        expect(checkUsernames(['']))
    })
});