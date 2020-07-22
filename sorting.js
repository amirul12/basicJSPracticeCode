 
 var list = [
     1,22,11,2,4,3,44,5,21,5
 ];



 //basic way to change value to another variable
 var a =2, b = 3;
 console.log(a,b);
 var c = a;
 a = b;
 b = c;
 console.log(a,b);

 //js latest way to assign 
 [a,b] = [b,a];
 console.log(a,b);

 //now swaping the list

 var len = list.length- 1;
 for(var i = 0; i< len; i++ ){

    for(var j = 0; j < len; j++){

        if(list[j] > list[j+1]){
            [list[j+1], list[j]] = [list[j], list[j+1]];
        }
    }
 }

 console.log(list);



