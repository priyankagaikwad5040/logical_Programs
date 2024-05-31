let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + "  Apna Colg" ;

let divs=document.querySelectorAll(".box");
console.dir(divs);
let i=1;
for (const d of divs) {
    d.innerText=`"new value " ${i}`;
    i++;
}

let b=document.createElement("button");
b.innerText="Click Me";
let p=document.querySelector("body");
p.prepend(b);

b.style.backgroundColor = "red";
b.style.textDecorationColor="white";

let newClass=document.querySelector("p");
newClass.classList.add("newClass");




