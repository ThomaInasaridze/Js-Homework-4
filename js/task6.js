// -----------------------------------------------------------------------



const num=[];
for (i=0;i<5;i++){
    num.push(prompt("Enter a number"));
}

const result = false;
for (i=0; i<5; i++){
    if(num[i]>100){
        result = true;

    }
}

console.log(result);


// --------------------------------------------------------



const num1=[];
for (i=0;i<5;i++){
    num1.push(prompt("Enter a number"));
}


const result1 = console.log("false");
for(let i=0; i<5;i++){
    if(num1[i]>=100){

        console.log("true")

    }
}


//function

console.log(num1.some(function (element) { if(element>100) {return true;} }));