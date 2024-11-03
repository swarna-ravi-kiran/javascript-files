var arr= ["ravi","raj",100,200,true];
arr.splice(1,1)   // for removing the element raj
console.log(arr);
arr.splice(2,3)  // for removing the elements 100,200,true
console.log(arr);
 
//// for add the elements in the array at a particular position////
var arr1 = [1,2,3,4,"rk"];
arr1.splice(1,1,100);    // here 1 is array positon and another 1 is i want to remove element and 100 is adding the element instead of 2///
console.log(arr1);

var arr2 = [10,20,30,40,50];
arr2.splice(3,0,150);   /// here 3 is array position and 0 is not removing any element and 150 is adding the element at the position of 3.
console.log(arr2);

