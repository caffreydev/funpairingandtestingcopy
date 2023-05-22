const alternateCase = require("../katas/alternate-case.js");

describe("alternateCase", () => {
    test("should take a string as an input and return a string with every other word capitalised", () => {
        expect(alternateCase("hello sunny world hi")).toBe("HeLlO sUnNy WoRlD hI");
    })
})

