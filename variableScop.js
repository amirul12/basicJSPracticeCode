/*var i = 12;

function doSomething(){

    i = 10;
    console.log("inside function",i);

   // var i;
}

doSomething();

console.log("outside function",i);

*/


let i = 12;

function doSomething(){

    let i = 10;

    if(true){
        let i = 23;
        console.log("inside if",i)
    }
    console.log("inside function",i);

   // var i;
}

doSomething();

console.log("outside function",i);
