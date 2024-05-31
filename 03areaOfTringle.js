const prompt=require('prompt-sync')();
let base= prompt("enter base of triangle");
let height =prompt("enter Height of triangle");
let area=(base*height)/2;
console.log(`Area Of Triangle is ${area}`);