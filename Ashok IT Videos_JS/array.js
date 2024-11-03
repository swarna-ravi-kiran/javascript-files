var arr =[];
var userDetails = ["ravi",100,true,{city:"andhra",state:"ap"},"male"] //inside the array data, we call it as elements
console.log(typeof userDetails);
console.log(userDetails.length)

/// example for the datatype of function///
var data = function(){}
console.log(typeof data);  /// o/p is object but it will show function in terminal but correct one is object

//push() method is used for add the element at last position///
let array = [100,200,300];
console.log(array);
array.push(400);
console.log(array)

array.unshift(99,'ravi'); /////it will add the elements in first places///
console.log(array)

array.shift(); ////it will remove the first element in the array
console.log(array);

array.pop() 
array.pop()    ////it will remove the last element in the array
array.pop() 
console.log(array);