var students = [];

addSudent(students,"rahim","korim","rahima");
console.log(students.length);

addSudent(students,"Jamal","kamal");
console.log(students.length);
addSudent(students,"shofikul");
console.log(students.length);

function addSudent(storge, ...people){


    for(i = 0; i < people.length; i++){

        storge.push(people[i]);
    }
}


console.log(students);
console.log(typeof students);

/*
function addSudent(a,...param){

     console.log(param.length);
}

*/