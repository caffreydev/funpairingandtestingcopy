const getYearsOfGrowth = require("../katas/get-years-of-growth.js");

describe("getYearsOfGrowth", () => {
    test("should calculate correct end year", () => {
    expect(getYearsOfGrowth(1000, 2000, 2, 12)).toBe(25);
    })
})
