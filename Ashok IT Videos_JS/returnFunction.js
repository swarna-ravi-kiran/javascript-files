function myfunction(x,y){
    result = x+y;
     return result
}
 var output = myfunction(1,2);
 console.log(output);


 function myfun(a,b){
    z = a+b;
    return function(){
        console.log("ravi");
    }
 }
 var res = myfun(100,200);
 console.log(res);
 res();

 function mycode(){
    return "i am ravi";
    console.log("swarna");
    console.log("10932")
 }
 var code = mycode();
 console.log(code);   ///////// upto 26 line is retun statement example.


 /// from 30 line is function expression example.
 var name = function(){
    console.log("i am anonymoues");
 }
 name();

 var code = function(a,b){
    res = a*b;
    console.log(res);
 }
code(2,2); /// upto here it is function expression example.
