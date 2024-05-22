var employees = [
    { name: "mujtaba",
        hoursWorked: 20,
        hoursRate: 500,
        salary: 0
    },
    { name: "hashir",
        hoursWorked: 30,
        hoursRate: 500,
        salary: 0
    },
    { name: "zulfi",
        hoursWorked: 40,
        hoursRate: 500,
        salary: 0
    }
];
var calculateSalary = function (employees) {
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        employee.salary = employee.hoursWorked * employee.hoursRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.1;
        }
        console.log("SALARY OF EMPLOYEE ".concat(employee.name, " IS ").concat(employee.salary));
    }
};
calculateSalary(employees);
