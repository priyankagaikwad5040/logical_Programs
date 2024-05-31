const prompt=require('prompt-sync')();
let n=prompt("Enter the number");

let array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array);

let sum=array.reduce((pre,curr)=>{
 
   return pre+curr;

})
console.log(sum);