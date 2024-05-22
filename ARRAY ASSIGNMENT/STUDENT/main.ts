
//  Student type
type Student = {
    name: string;
    grades: number[];
};

// ARRAY OF THREE STUDENT 
let student: Student[] = [
    { name: "Abdul wasay", grades: [50, 70, 80] },
    { name: "Zulfi", grades: [60, 80, 70] },
    { name: "Furqan", grades: [70, 80, 50] }
];


// FUNCTION OF CALCULATE AVERAGE GRADE
let calculateAverageGrade = (grades:number[]): string => {
    let   averageGrade = grades.reduce((val1, val2) => val1 + val2 ) / grades.length;
    if (averageGrade >= 90) {
        return "A";
    } else if (averageGrade >= 70) {
        return "B";
    } else if (averageGrade >= 50) {
        return "C";
    } else {
        return "F";
    }
};

// Example usage of the findGrade function
student.forEach(student => {
    let grade = calculateAverageGrade(student.grades);
    console.log(` THE GRADE OF ${student.name} IS  : ${grade}`);
})


