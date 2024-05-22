// ARRAY OF THREE STUDENT 
var student = [
    { name: "Abdul wasay", grades: [50, 70, 80] },
    { name: "Zulfi", grades: [60, 80, 70] },
    { name: "Furqan", grades: [70, 80, 50] }
];
// FUNCTION OF CALCULATE AVERAGE GRADE
var calculateAverageGrade = function (grades) {
    var averageGrade = grades.reduce(function (val1, val2) { return val1 + val2; }) / grades.length;
    if (averageGrade >= 90) {
        return "A";
    }
    else if (averageGrade >= 70) {
        return "B";
    }
    else if (averageGrade >= 50) {
        return "C";
    }
    else {
        return "F";
    }
};
// Example usage of the findGrade function
student.forEach(function (student) {
    var grade = calculateAverageGrade(student.grades);
    console.log(" THE GRADE OF ".concat(student.name, " IS  : ").concat(grade));
});
