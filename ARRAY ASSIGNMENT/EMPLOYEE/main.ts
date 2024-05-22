type Employee ={
    name:string;
    hoursWorked:number;
    hoursRate:number;
    salary:number
}
//ARRAY OF EMPLOYEES
let employees:Employee[]=[
    {name:"mujtaba",
        hoursWorked:20,
        hoursRate:500,
        salary:0
    },
    {name:"hashir",
        hoursWorked:30,
        hoursRate:500,
        salary:0
    },
    {name:"zulfi",
        hoursWorked:40,
        hoursRate:500,
        salary:0
    }
]
//CALCULATE SALARY FUNCTION
let calculateSalary =(employees:Employee[])=>{
    for(let employee of employees){
  employee.salary=  employee.hoursWorked*employee.hoursRate
  //10% BONUS APPLY
  if(employee.hoursWorked>=20){
    employee.salary*=1.1
  }
  console.log(`SALARY OF EMPLOYEE ${employee.name} IS ${employee.salary}`);
  
    }
  
}
calculateSalary(employees)

