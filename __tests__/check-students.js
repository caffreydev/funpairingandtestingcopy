const checkStudents = require("../katas/check-students.js");

describe("checkStudents", () => {
    test("should take a list of a student and cohort and return true if the student is in the cohort", () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'April'}], 'April')).toBe(true)
    })
    test("should return true if all students are in the given cohort and false if not", () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ], 'April')).toBe(false)
    })
})