
const prompt=require('prompt-sync')();
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

let fahrenheitNew=prompt("Enter a Fahreheit Value :");
 const celsiusNew=(fahrenheitNew-32)/1.8;

 
// display the result
console.log(`${fahrenheit} degree Fahrenheit is equal to ${celsiusNew} degree celsius.`);
