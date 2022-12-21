let min=[]; for (i=0;i<10;i++){
    min.push(prompt("Enter 10 different digits"));
}


const mins = (min.reduce( (acc, currentValue) => {if (acc>currentValue){return currentValue;} else{return acc};}));

console.log(mins);
