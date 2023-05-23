const mergeArrays = require("../katas/merge-arrays.js");

describe("mergeArrays", () => {
    test("should take 2 arrays and merges them into one array, taking one item from each array at a time", () => {
        expect(mergeArrays([1, 2, 3], ['a', 'b', 'c'])).toBe([1, 'a', 2, 'b', 3, 'c'])
    })
})

