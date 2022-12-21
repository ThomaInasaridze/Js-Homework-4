const someone = [ {Name:"Thoma",Age:23}, {Name:"Anano",Age:17}, {Name:"Salome",Age:28}, {Name:"Ilo",Age:17}, {Name:"Bachu",Age:69} ]

let result =[];                 
for (i=0;i<someone.length;i++){
if (someone[i].Age>18){
result.push(someone[i]);
}
}
console.table(result);

let result2 = someone.filter(pers => pers.Age > 18);
console.table(result2);
