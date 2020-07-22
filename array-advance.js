//6.9 array null empty remove

var list = [
    "sun",
    NaN,
    '',
    null,
    "wef",
    undefined,
    "sat",
];

// all data print
console.log(list);

//remove empty data

console.log(list.filter(Boolean));

//another way

var newList = [];

for(i in list){

    if(list[i]){
        newList.push(list[i]);
    }
}

console.log("new list "+newList);


