function fn(f){
    console.log(f);
    f(); 
}
fn(function(){
    var city = "hyder";
    console.log(city);
})                            //// from 1 to 8 line is anonymoues function also called as call back function.

function print(){
    console.log("ravikiran");
}                              ///this is normal function
print();
function add(x,y){
    z = x+y;
    console.log(z);
}                               ///this parametarised function
add(1,2);


function fun(s){
    console.log(s)
    s(100,200);
}
fun(add);    ///////// called as callback function


function myfunction(){
     console.log("swarna");     
}
myfunction(print);  //// callback function