/*
Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value on the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10%
*/

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  return "Name: " + this.name + " " + this.surname + ", salary: " + this.salary;
};
Employee.prototype.getSalary = function () {
  console.log("Salary: " + this.salary);
};
Employee.prototype.increaseSalary = function () {
  this.salary = this.salary * 1.1;
};

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function () {
  console.log("Specialization: " + this.specialization);
};

function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  console.log("Department: " + this.department);
};
Manager.prototype.changeDeparment = function (newDepartment) {
  this.department = newDepartment;
};

/*
variables
*/

// var jankoDev = new Developer("Janko", "Jankić", "Front End Dev", 99000, "JS");
// jankoDev.getSpecialization();

// var milicaMan = new Manager(
//   "Milica",
//   "Jankić",
//   "project manager",
//   140000,
//   "Front End"
// );

// console.log(milicaMan);
// milicaMan.getDepartment();
// milicaMan.changeDeparment("Team Lead");
// milicaMan.getDepartment();

var mrdjan = new Employee("Mrđan", "Medvedović", "koder", 65000);
console.log(mrdjan.getData());

mrdjan.getSalary();
mrdjan.increaseSalary();
mrdjan.getSalary();
