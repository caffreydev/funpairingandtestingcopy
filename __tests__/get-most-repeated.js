const getMostRepeated = require("../katas/get-most-repeated.js");


describe("getMostRepeated", () => {
    test("should take a string and return the character that is most repeated", () => {
        expect(getMostRepeated('hiiii')).toBe('i')
    })
    test("If two characters are both equally common, return the one that comes first alphabetically", () => {
        expect(getMostRepeated('bookk')).toBe('k')
    })
})