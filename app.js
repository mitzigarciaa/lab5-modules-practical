import multiply, { add, subtract, addAndLogUpper } from './mathModule.js'; 
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';


// Test the functions
console.log('Add: ', add(5, 3));                     // Output: 8
console.log('Subtract: ', subtract(5, 3));           // Output: 2
console.log('Multiply: ', multiply(4, 5));           // Output: 20
console.log('Uppercase: ', toUpperCase('hello '));   // Output: 'HELLO'
console.log('Lowercase: ', toLowerCase('Hello'));    // Output: 'hello'
console.log('Max: ', findMax([1, 2, 3, 4, 5]));     // Output: 5
console.log('Reversed: ', reverseArray([1, 2, 3]));  //Output: [3, 2, 1]
addAndLogUpper(10, 20);     //Output 30


const numbers = [1, 2, 3, 4, 5]; 
const maxNumber = findMax(numbers); 
const multiplier = 3
const resultInUpperCase = toUpperCase(multiply(maxNumber, multiplier).toString());
console.log('Uppercase Result: ', resultInUpperCase);  //Output 15