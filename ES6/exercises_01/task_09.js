/*
9.
a. Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.
*/

let listOfPersons = [
  {
    name: "Daniela",
    age: 31,
  },
  {
    name: "Liu",
    age: 28,
  },
  {
    name: "Marko",
    age: 33,
  },
  {
    name: "Mila",
    age: 26,
  },
  {
    name: "Masha",
    age: 24,
  },
];

getPersonsgByAge = (arr, age) => {
  return arr.filter((element) => element.age > age);
};
inculedesOlderThen = (arr, age) => {
  return arr.some((element) => element.age > age);
};

everOlderThen = (arr, age) => {
  return arr.every((element) => element.age > age);
};

console.log(getPersonsgByAge(listOfPersons, 32));
console.log(inculedesOlderThen(listOfPersons, 30));
console.log(everOlderThen(listOfPersons, 23));
