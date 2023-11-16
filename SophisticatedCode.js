/* 
  File Name: SophisticatedCode.js 
  Description: This code demonstrates a sophisticated, elaborate, and complex JavaScript program.
*/

// Helper function to calculate the factorial of a number
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// Function to calculate Fibonacci series up to n terms
function fibonacci(n) {
  let fibSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  return fibSeries;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Async function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

// Callback function to handle button click event
function handleClick() {
  console.log("Button clicked!");
}

// Promisified setTimeout function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// DOM manipulation example
const container = document.querySelector('.container');
const heading = document.createElement('h1');
heading.textContent = 'Sophisticated Code Example';
container.appendChild(heading);

// Event listeners
const button = document.querySelector('.button');
button.addEventListener('click', handleClick);

// Example usage of the implemented functions and classes
const factResult = factorial(5);
console.log(`Factorial of 5 is ${factResult}`);

const fibSeries = fibonacci(10);
console.log(`Fibonacci series up to 10 terms: ${fibSeries}`);

const person = new Person('John Doe', 30);
person.introduce();

(async () => {
  const data = await fetchData('https://api.example.com/data');
  console.log('Fetched data:', data);
})();

// Complex calculations
let result = 0;
for (let i = 0; i < 100000; i++) {
  result += Math.sqrt(i) * Math.log(i);
}
console.log('Complex calculation result:', result);

// Asynchronous delay
console.log('Before delay');
await delay(2000);
console.log('After delay');