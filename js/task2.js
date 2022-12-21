const arr = [{id:69,title:"New",description:"Page",userId:96}]


const arr2 = arr.map(({userId,...rest}) => ({...rest}));


console.table(arr2);

