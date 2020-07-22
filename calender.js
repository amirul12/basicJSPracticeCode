var monthName = "July";
var dayOfMonth = 30;
var startOftheDay = 4;

console.log("              Calender of the "+monthName+"\n");
console.log("Sun Mon Tue Wed Thu Fri Sat");


var day = "";

for(var i = 0; i< 6; i++){

    row =""
    for(var j = 1; j <=7 ; j++){

        var day  = 7*i + j - startOftheDay;

        if(dayOfMonth < day){
            break;
        }

        if( 1 > day){

            day = " ";
        }
     
     
        if(10 < day){
            row = row + day+"  ";
        }else{
            row = row + day+"   ";
       
        }
      
    }

    console.log(row);


}