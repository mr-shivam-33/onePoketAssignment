// Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.


let arr = [1, 22, 45, 65,89, 800, 637, 21,12];
let sum = 0;
for(let i=0; i < arr.length; i++) {
    sum = sum+arr[i];
}
console.log("Sum of all the numbers",sum)