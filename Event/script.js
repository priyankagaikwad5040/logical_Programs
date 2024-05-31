let mode=document.querySelector("#mode");
let currMode="light";

mode.addEventListener("click",()=>{
//  console.log(`you are trying to change mode`); 
 if (currMode==="light"){
    currMode="dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
 }else
 {
    currMode="light"; 
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");

 }
 console.log(currMode);
});

let d=document.querySelector("button");
d.addEventListener("mouseover", ()=>{
   console.log("move over active");
});