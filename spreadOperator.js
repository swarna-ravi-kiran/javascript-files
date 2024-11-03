//example for the object 
var obj = {
    name:"ravi",
    city:"hyder",
    code:101
}

var obj1 = {
    ...obj,        //this is spread operator (indicates with ...),will use for copying the object details to another object and array details to another array
    surname :"swarna"
}
console.log(obj1)

//example for the array
var arr = [100,200,"ravi","kiran",300];
var arr1 = [...arr,"ravikiran@gmail.com"];          // spread operator
console.log(arr1)