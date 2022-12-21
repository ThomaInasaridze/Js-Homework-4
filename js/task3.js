let a = prompt("Number");
let b = prompt("Once Again");
let c = prompt("Again");
let d = prompt("Almost Finished");
let e = prompt("Last one, for the result");


const num =[a,b,c,d,e];

const num2 = num;


for(let i=0;i<num.length;i++){
    num2[i]=num[i]*num[i];   
}

console.table(num2);


