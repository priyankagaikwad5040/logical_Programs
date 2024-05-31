let n=prompt("Enter the number");

let array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array);

let fact=array.reduce((pre,curr)=>{
 
   return pre*curr;

})
console.log(fact);