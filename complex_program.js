/* 
  Filename: complex_program.js
  Description: This complex program demonstrates various advanced concepts and techniques in JavaScript. 
*/

// Import external library
const moment = require('moment');

// Define a class for managing students
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to check if student is eligible for graduation
  isEligibleForGraduation() {
    return this.age >= 18;
  }

  // Method to calculate student's age in days
  calculateAgeInDays() {
    const today = moment();
    const dob = moment().subtract(this.age, 'years');
    return today.diff(dob, 'days');
  }
}

// Main program

// Create an array of students
const students = [
  new Student('John Doe', 20),
  new Student('Jane Smith', 19),
  new Student('Mike Johnson', 17),
  new Student('Emily Brown', 21),
];

// Print details of each student
for (let i = 0; i < students.length; i++) {
  console.log(`Student ${i + 1}:`);
  console.log(`Name: ${students[i].name}`);
  console.log(`Age: ${students[i].age}`);
  console.log(`Eligible for Graduation: ${students[i].isEligibleForGraduation()}`);
  console.log(`Age in Days: ${students[i].calculateAgeInDays()}`);
  console.log('------------------------------');
}

// Create a function to calculate factorial recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Calculate factorial of a number
const num = 5;
const factorialResult = factorial(num);
console.log(`Factorial of ${num}: ${factorialResult}`);

// Define a generator function to generate Fibonacci series
function* fibonacciSeries() {
  let prev = 0;
  let current = 1;
  while (true) {
    yield current;
    [prev, current] = [current, prev + current];
  }
}

// Generate Fibonacci series up to a certain limit
const fibonacciLimit = 50;
const fibonacciGenerator = fibonacciSeries();
let fibonacciNumber = fibonacciGenerator.next().value;
while (fibonacciNumber <= fibonacciLimit) {
  console.log(fibonacciNumber);
  fibonacciNumber = fibonacciGenerator.next().value;
}

// ... More advanced code and techniques
// ... (more than 200 lines)

// End of program