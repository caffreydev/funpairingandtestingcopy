const getFrequencies = require("../katas/get-frequencies.js");

describe("getFrequencies", () => {
    test("should take a string and return the frequency of each character", () => {
        expect(getFrequencies('hiiii')).toEqual({h: 1 , i: 4 })
})
test("should return freq of each char in string whilst ignoring special characters and spaces", () => {
    expect(getFrequencies('hello joe!')).toEqual({h: 1, e: 2, l: 2, o: 2, j: 1})
})
})