const prompt=require('prompt-sync')();
let number=prompt("Enter any number to check its +ve,-ve or zero");

if(number<0)
    {
        console.log(`Number${number} is Negative`);
    }
else if( number>0)
    {
        console.log(`Number${number} is Positive`);
    }
    else
    console.log(`Number${number} is Zero`);