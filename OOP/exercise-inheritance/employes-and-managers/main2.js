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

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return (
      "Name: " + this.name + " " + this.surname + ", salary: " + this.salary
    );
  }
  getSalary() {
    console.log("Salary: " + this.salary);
  }
  increaseSalary() {
    this.salary = this.salary * 1.1;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    console.log("Specialization: " + this.specialization);
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    console.log("Department: " + this.department);
  }
  changeDeparment(newDepartment) {
    this.department = newDepartment;
  }
}

var jankoDev = new Developer("Janko", "Jankić", "Front End Dev", 99000, "JS");
jankoDev.getSpecialization();

var milicaMan = new Manager(
  "Milica",
  "Jankić",
  "project manager",
  140000,
  "Front End"
);
console.log(milicaMan);
milicaMan.getDepartment();
milicaMan.changeDeparment("Team Lead");
milicaMan.getDepartment();

var mrdjan = new Employee("Mrđan", "Medvedović", "koder", 65000);
console.log(mrdjan.getData());

mrdjan.getSalary();
mrdjan.increaseSalary();
mrdjan.getSalary();

jankoDev.getInfo();
