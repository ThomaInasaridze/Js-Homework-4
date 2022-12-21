const num1=[];
for (i=0;i<5;i++){
    num1.push(prompt("Enter a number"));
}


let result1 = false;
for(let i=0; i<5;i++){
    if(num1[i]>=100){

        result1=true

    }
}
console.log(result1)


//function

// console.log(num1.some(function (element) { if(element>100) {return true;} }));