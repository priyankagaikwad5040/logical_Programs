const { log } = require("console");

let num1=5;
let num2=10;


console.log(`NUMBERS BEFORE SWAPPING :num1 is  ${num1}  and num2 is ${num2}`);
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;

console.log(`NUMBERS AFTER SWAPPING :num1 is  ${num1}  and num2 is ${num2}`);