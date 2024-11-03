// example of while loop//
function printNumbers(){
    var x=1;
    while(x<=10){
        console.log(x);
        x++;
    }
}
printNumbers();

// example of the do while loo////
var x=10;
do {
    console.log(x);
    x--;
}while(x >=1);

//print even number in between 1 to 100
var x=1;
while(x<=100){
    if(x%2 ===0){
        console.log(x);
    }
    x++;
}

// example of for loop//
for(var x=60; x<70; x++){
    console.log(x);
}

//check the given number prime number or not
function primeNumber(num){
    var isprime = true;
    if(num <1){
        console.log("please enter positive number")
    }
    else if(num ===1){
        console.log("not a prime and not a composite")
    }
    for(var i=2;i<num;i++){
         if(num%i ===0){
        isprime = false;
    }
}
if(isprime && num > 1){
    console.log("given number is prime number")
}
else if(!isprime && num > 1){
    console.log("not a prime number")
}
}
primeNumber(10);