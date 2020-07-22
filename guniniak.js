var n = 4;

var range = Math.ceil(Math.sqrt(n));

var divisior = "";

for(var i = 1; i <= range; i++){

    if( n % i == 0){

        if(i == n/i){
            divisior =divisior +i+" ";
        }else{
            divisior = divisior +  i +" "+(n /i)+" ";
        }

      
    }



}

console.log(divisior);
