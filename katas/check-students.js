function checkStudents(students, cohort) {
    return students.every(name => name.cohort === cohort);
}

module.exports = checkStudents;
