const prompt=require('prompt-sync')();
let number=prompt("Enter any number to check odd or even");

if(number%2==0)
    {
        console.log(`Number${number} is Even`);
    }
else 
    {
        console.log(`Number${number} is Odd`);
    }